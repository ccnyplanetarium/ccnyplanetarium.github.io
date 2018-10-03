---
layout: post
title:  "Adding New Mars Landscapes"
date:   2018-10-02
excerpt: "How to add new HiRISE data into openspace."
image: "assets/images/mars-landscape-1-small.jpg"
---

## Importing more HiRISE data into OpenSpace

<div class="row">

<figure class="figure col-lg-6 col-sm-12">
<img class="figure-img img-fluid rounded" src="{{ "assets/images/mars-landscape-1-1200.jpg" | absolute_url }}" alt="mars surface" />
  <figcaption class="figure-caption">View of a meandering feature on Mars.</figcaption>
</figure>

<div class="col">
<p>
Since 200x, the Mars Reconnaissance Orbiter has been taking very high resolution images of the Martian surface. Using some advanced tools, we can extract height information from them and reconstruct the surface features of Mars. This process will create a DTM (digital terrain model), essentially a large matrix of x,y,z values that can be used to create 3d models of the topography.
</p>

</div>

</div>

The process for importing these data files into OpenSpace has been written up in their [wiki here](http://wiki.openspaceproject.com/components/globe-browsing/general) . We've tried it out and it works great. You'll need to install a few custom libraries and use the terminal, but the documentation guides you through that process (for the most part).

The workflow involves converting the files available on the HiRISE site into formats usable by OpenSpace (i.e. a GeoTIFF), and then tweaking some of the meta-data that describes the files.

Here are a few of the basic ideas if you're just getting started.
  - There are two data files necessary: 1) a DTM (or elevations) data set which has the height data stored at every pixel in the image and 2) the image texture that will be draped over top of the heightmap.
  - The terrain information is stored in a file called DTEEC-xxx.IMG.  If you download it and try to open it in a regular application, don't be surprised if it doesn't look normal or even recognizable. You'll need to process it before you can really see it in the same way you would a regular image. (it's not just a regular image)
  - The images textures are usually called ESP-xx.JP2 or PSP-xx.JP2. (The JP2 is a JPEG2000, which version the regular jpeg image file format) You'll need to find the one that corresponds to the DTEEC file shown on the HiRISE DTM extras column. Again, those are probably not going to open well in most consumer applications, but you can use HiView to view them: [HiView](https://www.uahirise.org/hiview/)

Some other things to be aware of:
  - the files, both the downloads, and the ones you create during the process are large! (1-2 gigabytes is normal). Make sure your internet is up to it, and you have some extra storage space.
  - the processing can take a little while (5 minutes to 20 minutes depending on the resolution and computer speeds)
  - don't forget to fix the paths to the TIFF files in the vrt files - they aren't exactly right as generated.
  - the write up doesn't mention creating a `.info` file, but that's something  you'll probably want to do. They look like this:

    ```
    Name = "Kaiser Crater"
    Identifier = "Kaiser_Crater"
    Description = ""
    ColorFile = "Active_Dune_Gullies_in_Kaiser_Crater_Texture.vrt"
    HeightFile = "Active_Dune_Gullies_in_Kaiser_Crater_Heightmap.vrt"
    Location = {
      UpperLeft  = { 20.051910, -46.538101 },
      LowerLeft  = { 20.051910, -46.928387 },
      UpperRight = { 20.241749, -46.538101 },
      LowerRight = { 20.241749, -46.928387 },
      Center     = { 20.146829, -46.733244 }
    }
    ```
  - you can get the `Location` values for your new patch by simply running the gdalinfo command on the DTEEC TIFF file that you created.
