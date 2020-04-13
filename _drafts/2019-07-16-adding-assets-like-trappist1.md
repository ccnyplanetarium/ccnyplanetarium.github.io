---
layout: post
title:  "OpenSpace: Adding assets for far away things"
date:   2019-05-07
excerpt: ""
image: "assets/images/trappist-250.jpg"
author: "James Hedberg"
---


<!-- <figure class="figure col-lg-3 col-sm-6 float-left">
<img class="figure-img img-fluid rounded" src="{{site.baseurl}}/assets/images/poster-LAMP.jpg" alt="Day of Science" />
<figcaption class="figure-caption"><a href="{{site.baseurl}}/assets/images/poster-LAMP.jpg">Download Poster </a></figcaption>

</figure> -->

Here's a little how to if you want to add an object that is not in the solar system, such as the Trappist 1 system of planets.

### Where is it?
#### Determining the coordinates of your object

The first and primary issue to resolve is finding the object's location in the coordinate system used by OpenSpace for placing celestial bodies. Trappist 1 is located about 12.1 parsecs away and can be found (if you're on earth) by its RA and Dec values:

```
RA:  23h 06m 29.283s
Dec: −05d 02' 28.59''
```

Since we will be referencing the SolarSystem Barycenter as the center, we'll need to convert these values to Galactic Coordinates first. This can be accomplished in a number of ways. This writeup will use the Astropy python package to do this sort of thing:

```python
>>> from astropy.coordinates import SkyCoord
>>> trappist_icrs = SkyCoord('23h06m29s', '-5d2m29s', frame='icrs')
>>> trappist_galactic = trappist_icrs.galactic
>>> print(trappist_galactic)
 <SkyCoord (Galactic): (l, b) in deg
    ( 69.71085131, -56.64350366)>
```

Now, you should be able to see the galactic coordinates (in spherical coordinates).

The next step is to convert the spherical coordinates to Cartesian. Again, Astropy has this:

```python
>>> from astropy.coordinates import CartesianRepresentation
>>> trappist_galactic_cart = trappist_galactic.represent_as(CartesianRepresentation)
```

This will generate the x,y,z coordinates, with a max value of 1. We'll need to scale everything to the actual distance of 12.1 parsecs, then convert that to meters:

```python
>>> print("x: ", trappist_galactic_cart.x*12.1*3.086e+16)
>>> print("y: ", trappist_galactic_cart.y*12.1*3.086e+16)
>>> print("z: ", trappist_galactic_cart.z*12.1*3.086e+16)
x:  7.119498840089523e+16
y:  1.9257714373196378e+17
z:  -3.118931839182045e+17
```

Now we have the position of the trappist 1 system in the coordinates used by OpenSpace to place objects (relative to the center of our solar system)

### Create the asset

Now you'll need to create the actual OpenSpace asset that will have the information about where Trappist 1 is located. To do this, we have to make a few asset files and link them together.

First we'll have a main asset file called `trappist.asset` and put that in a folder called `trappist` which lives in `data>assets>scene>milkyway`. This will be the asset that is called from the `openspace.cfg` configuration file at startup. This file will reference 3 other files: a geneal _helper_ , the _transforms_ asset which will contain our displacement coordinates for the trappist system, and an asset for the actual brown dwarf located at the center of the trappist system.

The main asset file looks like this:

```
# trappist.asset
local assetHelper = asset.require('util/asset_helper')
local transforms = asset.require('./transforms')
asset.require('scene/milkyway/trappist/trappiststar')
```

You can see it references the `transforms.asset` which is located in the same folder, and the star itself.

The `transforms.asset` is shown next. It references the location of the sun as the starting point. Then simple applies a `StaticTranslation` translation transform to the `TrappistCenter` object. The position of the `TrappistObject` is set based on the calculations done above.

```
# transforms.asset
local assetHelper = asset.require('util/asset_helper')
local transforms = asset.require('scene/solarsystem/sun/transforms')
asset.require("spice/base")


local TrappistCenter = {
    Identifier = "TrappistCenter",
    Parent = transforms.SolarSystemBarycenter.Identifier,
    Transform = {
        Translation = {
            Type = "StaticTranslation",
            Position = { 7.11879E16, 1.92575E17, -3.11896E17}
        }
    },
    GUI = {
        Name = "Trappist Center",
        Path = "/Milky Way/Trappist1/TrappistCenter",
        Hidden = true
    }
}

assetHelper.registerSceneGraphNodesAndExport(asset, {TrappistCenter})
```

Lastly, we have the actual star asset, named `trappiststar.asset`. This file makes the asset a `RenderableGlobe` and attaches it to the asset made earlier: `TrappistCenter`. The physical parameters of the star (i.e. its radius) can be included here, as well as any textures that should be visible on the globe.

```
#trappiststar.asset
local assetHelper = asset.require('util/asset_helper')
local textures = asset.require('scene/basicsystem/basic_textures').TexturesPath
local transforms = asset.require('./transforms')


local Trappist_1A = {
    Identifier = "Trappist_1A",
    Parent = transforms.TrappistCenter.Identifier,
    Transform = {
        Translation = {
            Type = "StaticTranslation",
            Position = { 0,0,0}
        },
        Scale = {
            Type = "StaticScale",
            Scale = 1.0
        }
    },
    Renderable = {
        Type = "RenderableGlobe",
        Radii = 84179000.7,
        SegmentsPerPatch = 64,
        PerformShading = false,
        Layers = {
        ColorLayers = {
            {
                Identifier = "Texture",
                FilePath = textures .. "/brown_dwarf.jpg",
                Enabled = true
            }
        }
        },

        },
    Tag = { "planet_exoSystem", "star" },
    GUI = {
        Path = "/Milky Way/Trappist/Trappist_1A"
    }
}



assetHelper.registerSceneGraphNodesAndExport(asset, { Trappist_1A })
```

<br  style="clear:both;"/>
