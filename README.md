# Nebraskaland Omeka S Theme
This is a custom Omeka S theme for the [Nebraskaland Digital Archive](https://nebraskaland.unl.edu/). This theme was created by the [Center of Digital Research in the Humanities](https://cdrh.unl.edu/) at the [University of Nebraska–Lincoln](https://www.unl.edu/) to carry over the Nebraskaland Digital Archive design when it was migrated from Ruby on Rails to Omeka S.

## Theme Modules

This theme works with several Omeka S Modules to build a more robust user experience. Some of these modules are required for the theme to work as intended, while others are "supported" by the theme in that this theme provides styling and layout for the module's features.

### Required Modules

  - [Common](https://omeka.org/s/modules/Common/): adds internal features on which most other modules are dependent.
  - [CSSEditor](https://omeka.org/s/modules/CSSEditor/): required for adding/editing CSS through the Omeka S admin interface, without going into the theme files every time.

### Themed Modules
The Nebraskaland theme includes styles for the following modules, but they are not required for the theme to function correctly.

  - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/): the theme modifies fonts, colors, and spacing on the page, as well as restyling the table of results to appear as an image gallery.
  - [OctopusViewer](https://github.com/biblibre/omeka-s-module-OctopusViewer): code in the CSS Editor module adds some space between the PDF viewer and other elements on the page, and hides the PDF viewer when an issue does not have a PDF version.

## Installing the Theme

**If the theme is already installed**, you can select it from the list of installed themes following the [Select a Theme documentation](https://omeka.org/s/docs/user-manual/sites/site_theme/) in the Omeka S User Manual.

**If the site is moved to new hosting or a new Omeka S instance**, the theme may need to be installed again. To install the theme, download this GitHub repository as a `.zip` file (instructions can be found in GitHub's [downloading files from GitHub documentation](https://docs.github.com/en/get-started/start-your-journey/downloading-files-from-github#downloading-a-repositorys-files)) and follow the instructions in the [Omeka S User Manual](https://omeka.org/s/docs/user-manual/sites/site_theme/) to install it. Modules may also need to be installed again. Most importantly, **page content, site text, and theme settings will have to be copied over manually**,  since they are controlled through the Omeka S admin interface rather than through the theme files.  Omeka S theme files contain only the basic visual design of the site (colors, fonts, layout, and templates).

The CSS Editor module also contains some theme styles (hiding certain elements, for example) so that they can be modified without going into the theme folder. If the theme has to be (re)installed, the contents of the CSS Editor will need to be copied over manually. To copy the CSS Editor code to a new installation: 

1. [Install and activate](https://omeka.org/s/docs/user-manual/modules/#installing-modules) the [CSS Editor module](https://omeka.org/s/modules/CSSEditor/) for the new install, if you haven't already.
2. Go to your site in the admin interface, and in the sidebar, click CSS Editor.
3. Copy the CSS code from the old site, or from the [css-editor/css-editor-backup.css](https://github.com/CDRH/theme_nebraskaland/blob/main/css-editor/css-editor-backup.css) file in this GitHub repository.
4. Paste the copied CSS into the CSS Editor box.
5. Click Save.

## Designing a Site with this Theme

The first and best resource for editing an Omeka S site is the [Omeka S User Manual](https://omeka.org/s/docs/user-manual/). This is theme-agnostic and covers the all the things you can do as an Omeka S site admin or editor.

Since this theme is built on Bootstrap version 5.3, you can also refer to the official [Bootstrap 5.3 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for available CSS classes and variables, as well as HTML elements like cards and buttons.

The information you will find in this README is specific to this theme and its customizations of Bootstrap 5.3.

## Theme Settings

Theme settings are accessed from the site admin interface. To edit theme settings, go to Sites > Nebraskaland Digital Archive > Themes, and under the theme name, click  the Edit theme settings button.

The couple of the settings for this theme are [carryovers from the Default theme](https://github.com/omeka-s-themes/default?tab=readme-ov-file#theme-configuration):

- **Top navigation depth:** 1
  - This setting controls how many navigation levels to display. _This does not affect the top menu_, only the main menu below the banner.
  - Setting this to '0' shows all levels. It's okay to leave this at zero, but as of 2025, the Nebraskaland Digital Archive site has only ever had 1 level of navigation (e.g. no subpages/submenu/child pages). This theme works best with a maximum of 2 levels for Top navigation depth. To edit the navigation, go to Sites > Nebraskaland Digital Archive > Navigation.
- **Logo:** [No asset selected]
  - Upload an image asset to use as a logo in place of a text site title. This is currently blank, as the logo is currently created with real text rather than an image (and this is preferable for accessibility reasons).
- **Banner**: the header image that appears behind the Nebraskaland logo should be uploaded and selected here. 
- **Truncate Body Property:** Show full value
  - Controls the size of the body property of resources in a browseable list. It can be set to show the full value, truncate after 4 lines and fade out, or truncate after 4 lines and clip with an ellipsis.
- **Top Menu Links**
  - These options control the menu at the very top of the page, above the header image. As of 2025, there are 3 links in that menu, to match the Rails site design: [Nebraskaland Magazine](http://magazine.outdoornebraska.gov/), [Subscribe](http://magazine.outdoornebraska.gov/subscribe-renew/), and [Current Issue](http://magazine.outdoornebraska.gov/digital/).

The other settings in this theme control the content that appears in the footer of every page.

### Footer text

**Footer Content** is the text content that appears first in the footer, before any logos. This box supports HTML content so that you can add links, paragraphs, or other HTML tags as needed.

#### Copyright

The copyright date, displayed in the footer, is part of the Footer Content text and does not automatically update. To edit the date, edit the text in Footer Content box and save your changes.

### Footer Logos

The theme supports up to 5 logos for project partners, grantors, or other supporting organizations. If more than 5 logos become necessary in the future, consider adding a page to the About pages called "Support" or something similar and displaying the logos there.

For each logo, there is a place to upload and/or select an image, and a place to enter the URL the logo should link to when clicked. Both are technically optional, but providing a link without an image will make the visual layout look strange.

#### Adding a footer logo image

Only [Assets](https://omeka.org/s/docs/user-manual/admin/assets/#add-an-asset) can be used for logo images, not Items or Media. 

To add (or change) a logo in the footer, you can select an already-uploaded asset, or follow the instructions below. **Make sure all logo images have [alt text](https://omeka.org/s/docs/user-manual/content/media/#alt-text).**

To add a logo image that has **not** already been uploaded as an Asset:

  1. On the Edit theme settings page, go to the Footer Logo # field (1, 2, or 3) and click Select.
  2. Follow the instructions to [Add an asset in Omeka S](https://omeka.org/s/docs/user-manual/admin/assets/#add-an-asset).
  3. **Alt text is required for ADA Title II web accessibility compliance.** It's easiest to enter the alt text before you click Upload.
  4. Do not check the box for Optimize size for web if your image has a transparent background (like a PNG). It is okay to do so for JPG/JPEG files, however.
  5. Click Upload.
  6. The Asset has now been uploaded. Find it in the list under Select asset and click to select it.
  7. If you want the image to be a link (e.g. have the Mellon logo take users to the Mellon website when they click it), paste the full URL in the corresponding Footer Logo # Link field.
  7. Save your changes using the Save button in the top right corner of the page.

To add a logo image that has **already** been uploaded as an Asset:

  1. Make sure the Asset has alt text first. To do this, follow the instructions to [Edit an asset in Omeka S](https://omeka.org/s/docs/user-manual/admin/assets/#edit-an-asset); if the Alt Text field is empty, add alt text and click Save.
  2. On the Edit theme settings page, go to the Footer Logo # field (1, 2, or 3) and click Select.
  3. Find the image in the list under Select asset and click to select it.
  4. If you want the image to be a link (e.g. have the Mellon logo take users to the Mellon website when they click it), paste the full URL in the corresponding Footer Logo # Link box.
  5. Save your changes using the Save button in the top right corner of the page.

#### Changing a footer logo image

To replace an old logo image with a new one, go to the Footer Logo # field with the logo you want to replace and follow the instructions for [Adding a footer logo image](#adding-a-footer-logo-image). You do not need to clear the old image before selecting a new one (though it is okay if you do).

#### Changing a footer logo link

You can add, remove, or change a footer logo link at any time. You do not need to do anything to the logo image(s) to make changes to the Footer Logo # Link fields.

#### Removing a footer logo image

To remove a logo image: 

  1. On the Edit theme settings page, go to the relevant Footer Logo # field (1, 2, or 3) and under the logo thumbnail, click Clear.
  2. Delete the URL in the corresponding Footer Logo # Link field, if there is one.
  3. Save your changes using the Save button in the top right corner of the page.

### Customize the 404 page

The 404 Page Title and Custom Text boxes allow you to customize the _404: Page Not Found_ error page users will see if they try to view a page on the site that doesn't exist. (You can see this in action at any nonexistent URL, such as https://nebraskaland.unl.edu/blahblahblah.)

## Note for Future Developers

If the `.scss`/`.css` files in this theme are modified at some point in the future, review Omeka S' [Sass and CSS documentation](https://omeka.org/s/docs/developer/themes/sass_and_css/#editing-the-styles) **BEFORE** making any modifications, and follow the instructions on that page to compile your changes to the theme's CSS.

## Configure resource pages

As of November 2025, this theme is designed around the following Resource page block layouts. To check and/or edit these, follow the Omeka S [Configure resource pages documentation](https://omeka.org/s/docs/user-manual/sites/site_theme/#configure-resource-pages).

### Item page blocks

  - **Region: Main**
    - Media embeds
    - Values

### Media page blocks

  - **Region: Main**
    - Media embeds
    - Values

### Item Set page blocks

  - **Region: Main**
    - Linked resources
    - Values

### CSS Editor

The [CSSEditor](https://omeka.org/s/modules/CSSEditor/) Omeka S module allows you to easily write CSS from within the admin interface, without having to modify the theme files.

#### IMPORTANT! Always Back Up the CSS Editor Before Making Changes

Before making changes to the CSS Editor code, we highly recommend backing up the code in a safe place first. To that end, there is a folder and file provided in this repository for this purpose: [css-editor/css-editor-backup.css](https://github.com/CDRH/theme_nebraskaland/blob/main/css-editor/css-editor-backup.css). 

The CSSEditor module does not currently have versioning, meaning that if you delete some styles from the CSSEditor and later want to get them back, the only way to do so is to either (a) roll back the entire Omeka S installation to a previous backup date (potentially losing more recent changes in the process) _or_ (b) have the text contents of the CSS Editor saved somewhere on your computer, albeit temporarily, so that you have a copy of the previous code if and when you need it. The latter is both easier to do and less likely to break something.

### Hidden Elements

With the launch of the site in 2025, we chose to hide a few elements with `display: none` in the CSS Editor rather than by overriding PHP in the base Omeka S files. This means that to _unhide_ any of those elements, all you need to do is find the relevant code in the CSS Editor and delete it.

Deleting the following code from the CSS Editor, for example, will make Resource Class show up as a sorting option site-wide:

```
form.sorting select:first-of-type option:nth-child(2) {
  display: none;
}
```

## Omeka S Page Blocks

The Omeka S Page editor allows you to apply CSS classes in its block layout UI. This can be a huge help when it comes to applying specific styles within a page (especially thanks to Bootstrap 3's wide variety of ready-to-use CSS classes). As of 2025, this functionality is only available for Pages (aka Simple Pages); it is not possible for resource pages, i.e. Item pages, Media pages, or Item Set pages.

### Page Title Block

Every page must have a Heading 1 (`<h1>`) to meet ADA Title II requirements. When editing pages, this is most easily accomplished with the **Page title block**, which displays the page title as an `<h1>`. When you create a page, it should already be added as a block.

### Homepage Images block (randomized)

A custom block template has been created for the Nebraskaland Omeka S theme in order to display a random background image on the homepage (as the previous site did) with an overlaid text box. This custom design is not a type of Page Block, but rather a selectable template for the [Asset](https://omeka.org/s/docs/user-manual/sites/site_pages/#asset) block type. 

When editing the Home page, you'll see a block called Asset that lists each of the currently selected images with a thumbnail and the file name. This is where the custom design is configured. Each time the home page is loaded, Omeka S randomly selects one of the listed images to display. The image's caption is displayed in a transparent rectangle that overlays the image.

#### Edit homepage text

Each homepage image must be set up with its own caption. To display the same homepage text all the time (no matter which image is displayed), just put the same HTML/text in the Caption box for each image/asset. As of November 2025, all 5 homepage images have the same exact caption text.

To edit the text on the homepage, edit the image's caption: click the wrench icon to the right of the image to open the configuration options. In the box labeled Caption, you can edit the existing HTML. Paragraph styling (e.g. centered text) and links are added to the caption using HTML, so if you are not familiar with HTML paragraph or link tags, use caution when editing and change only the text you need to.

#### Add a new homepage image

1. In the Asset block, click the Add asset button.
2. Upload a new asset or select an existing asset.
3. If you are uploading a new asset, be sure to add alt text (required for accessibility compliance).
4. Fill in the Caption text box with the text/HTML to be displayed in the overlay.
5. Click Apply changes.
6. Save the page.

#### Edit or change a homepage image

1. In the Asset block, click the wrench icon to the right of the image to open the configuration options.
2. In the configuration options, click Select (under the image thumbnail) and upload a new asset or select an existing asset.
3. Edit the caption, if needed.
4. Click Apply changes.
5. Save the page.

#### Remove a homepage image

1. In the Asset block, click the trash can icon to the right of the image.

#### Adding a new homepage image block from scratch

If the home page needs to be re-created, or if you wish to use the same block template on a different page:

1. Edit the page.
2. Under Add new block, click Asset.
3. In the newly added Asset block, click the settings icon (3 gears) to the right of the block title.
4. In the Block layout configuration, click the Template dropdown menu and select Random asset with caption overlay.
5. Click Apply changes.
6. Follow the instructions above to add images and text.
7. If, on the published page, there is a white line showing up at the bottom of the block, change page layout's row gap from 10px to 0px:<br />
  a. Edit the page.<br />
  b. Above the blocks, in the same row as the Layout dropdown, click the settings icon (3 gears) to open the Page layout configuration options.<br />
  c. In the Page layout configuration options, change Row gap (px) to 0px. 

## Module settings

### Faceted Browse

As of November 2025, the `/browse` page has been set up using the following options. To (re)create the exact same Faceted Browse page, go to Sites > Nebraskaland Digital Archive > Faceted Browse.

- Title: Browse Issues
- Resource type: Items (selected by default)
- Categories: Browse Issues By (click add/edit)
  - Name:  Browse Issues By
  - Search query (click Edit)
    - Under Search by item set, add two queries:
      - In: Current live issues
      - In: To Review
  - Default sort by: Date Issued
  - Default sort order: Ascending
  - Helper text: Search the full text of all digitized issues in the archive. Or select keywords to narrow down issue results. Only issues that fulfill all of the chosen keywords will appear in the results.
  - Helper text button label: [blank]
  - Value facet mode: Match all
  - Facets:
    - Full-text Search
    - Decade
      - Facet type: Value
      - Facet name: Decade
      - Property: Name of temporal position
      - Select type: Single (dropdown menu)
      - Query type: Contains
      - Query type: Contains
      - Values: See note about the "Values" text box for facets
    - Year
      - Facet type: Value
      - Facet name: Year
      - Property: Date
      - Select type: Single (dropdown menu)
      - Query type: Contains
      - Values: See note about the "Values" text box for facets
    - Season
      - Facet type: Value
      - Facet name: Season
      - Property: Temporal Coverage
      - Select type: Single (list)
      - Query type: Contains
      - Truncate values: [blank]
      - Values: See note about the "Values" text box for facets
    - Volume #
      - Facet type: Value
      - Facet name: Volume #
      - Property: volume
      - Select type: Single (dropdown menu)
      - Query type: Is exactly
      - Values: See note about the "Values" text box for facets
  - Unique Issues
      - Facet type: Value
      - Facet name: Unique Issues
      - Property: edition
      - Select type: Multiple (list)
      - Query type: Contains
      - Truncate values: [blank]
      - Values: See note about the "Values" text box for facets
  - Media Format
      - Facet type: Value
      - Facet name: Media Format
      - Property: Type
      - Select type: Multiple (list)
      - Query type: Contains
      - Truncate values: 5
      - Values: See note about the "Values" text box for facets
  - Columns:
      - Title
        - Column type: Title (link to resource)
        - Column name: Title
        - Exclude sort by: [unchecked]
      - Edition
        - Column type: Value
        - Column name: Edition
        - Exclude sort by: [unchecked]
        - Property: Dublin Core: Date
        - Max values: 1
      - Date Issued
        - Column type: Value
        - Column name: Date Issued
        - Exclude sort by: [unchecked]
        - Property: Dublin Core: Date Issued
        - Max values: 1
   
  **Note about the "Values" text box for facets**: the list of values in this box can be quickly (re)populated by checking the box for "Show all available values," but the resulting list will often have to be re-alphabetized/put in chronological order manually. To add a new value without repopulating the list, simply add a new line of text and save your changes.

### OctopusViewer Settings

As of November 2025, the PDF viewer is set up using the following options. To edit these, go to Modules, find OctopusViewer in the list, and click the Configure button.

- Show viewer on the item page: Before the item content
- Show viewer on the media page: Before the media content
- IIIF Image URI template: (blank)
- Show media selector: Never
- Show media info: Never
- Default media title: No text
- Show download link: No

## Links and References

### Omeka S
  - [Omeka S](https://omeka.org/s/)
  - [Omeka S User Manual](https://omeka.org/s/docs/user-manual/)
  - [Omeka S Developer Documentation: Themes](https://omeka.org/s/docs/developer/themes/)
  - [Omeka S Forums](https://forum.omeka.org/c/omeka-s/8)

### Bootstrap
  - [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/download/)
  - [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### Accessibility

  - [CDRH Accessibility Wiki](https://github.com/CDRH/accessibility)
  - [”Fact Sheet: New Rule on the Accessibility of Web Content and Mobile Apps Provided by State and Local Governments”](https://www.ada.gov/resources/2024-03-08-web-rule/)
  - [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
