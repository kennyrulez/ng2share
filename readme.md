# ngxshare Share buttons for angular 2+ !

![ngxshare preview](http://i.imgur.com/L9EbBaa.png)

A module to easily implement share button within an angular 2 app. The buttons are highly costumizable. [Live demo](https://kennyrulez.github.io/ngxshare/).

##Note

Inspired from [ng2-sharebuttons by MurhafSousli](https://github.com/MurhafSousli/ng2-sharebuttons), if you don't know it already,
go check it out.

Also visually inspired from the share buttons at http://mashable.com


## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [Options](#options)

 * [Costumization](#costumization)

 * [Multiple shared content by url](#multiple-shared-content-by-url)

 * [Thanks for your feedback](#thanks for your feedback)


## Installation

Install with npm

```
      npm install ngxshare --save
```

Import it in your module.

```
import {ShareModule} from 'ngxshare/share.module'

 @NgModule({
   imports: [..., ShareModule ],
 })
```

## Usage

You then can use the share container in your app

```
    <share-container
                        direction="horizontal"
                        addedText="your creation"
                        [textEnabled]="true"
                        [platforms]="['reddit','twitter','facebook','mail']">
    </share-container>

```

 By default, ngxshare takes the url and the title of your website to pass it in the parameters of the share url.

 However, it's good practice to use the meta tags if you intend your website to be shared, so you shouldn't rely on the default behavior.

 Here are the meta tags you can add to your head tag.

 ```
  <meta property="og:url" content="www.google.com" />
  <meta property="og:title" content="google" />
  <meta property="og:description" content="A site to make researches" />
  <meta property="og:image" content="google.png" />
  <meta property="nxs:via" content="Google" />
  <meta property="nxs:hashtags" content="Google"/>
 ```
 As you can see there is two additional tags that ngxshare uses internally: *nxs:via* and *nxs:hashtags*. Those tags are used for twitter,
 thus if you don't need twitter as a sharing platform there is no need to put those. Actually none of the tags are mendatory, but it is advised
 nonetheless to be quite exhaustive.

 *Want to share more than one content by url and can't rely on meta tags ? See [Multiple shared content by url](#multiple-shared-content-by-url)*

 Then you just have to use the component tag in your angular 2 app.

 ```
<share-container> </share-container>
```

There is quite a few options however, so we are gonna see that next


## Options

```
	<share-container
						direction="horizontal"
						addedText="your creation"
						[textEnabled]="true"
						[platforms]="['reddit','twitter','facebook','mail']">
	</share-container>
```

**platforms**: Array of string of platform's name that are displayed in the primary panel. Can be anything in : ['reddit','twitter','facebook','googlePlus','stumbleUpon','tumblr','linkedin','pinterest','mail']
Default is ['reddit','twitter','facebook','googlePlus','stumbleUpon','tumblr','linkedin','pinterest','mail'].

**direction**: horizontal (default) / vertical; You might want to put your share buttons on the top of an article or you might want to put it on the right.
In which case having the share buttons being displayed vertically is useful. That's what this option is for.

**textEnabled**: true (default) / false; Specify whether the buttons in the primary pannel have text appended to them. Example: "Tweet".

**addedText**: 'some string'; specify the text appended to the default text, example: "Tweet some string".

**properties**: specify the properties. Useful if you share multiple content by url. You shouldn't use it if you don't though. See [Multiple shared content by url](#multiple-shared-content-by-url) for more info.


## Costumization

If you want to costumize the share buttons on a global scope, on the whole website, you can directly change the css source code in the css. There is two files.
*share-button.component.css* which is the css for individual buttons, and *share-container.component.css* which is the css for the container.


## Multiple shared content by url

If however you have multiple share buttons on your website and want multiple different styles, you can just override the css properties with !important.
That is what is done on the demo website, see costumizable section at https://kennyrulez.github.io/ngxshare/

The code in the source code is actually :


 ```
	 .customizable .nxs-share-btn{
	  background: #666!important;
	  color:white!important;
	}
	.customizable .nxs-share-btn:hover{
	  color:#f15c66!important;
	}

	<span class="customizable">
		<share-container> </share-container>
	<span class="customizable">
 ```

 To give a grey background and a red color on hover:

 ![ngxshare custom](http://i.imgur.com/QDRIyxi.png)


 Remember that !important is used here because there is multiple different styles on the page, so there is a need to overwrite the default style in some places.
 If that was not the case, changing the source css would be more straight forward.

 If you have multiple content you will need the use of the **properties** option.
 Indeed the meta tags won't suffice as you want to share multiple things for the same url. You want multiple desciptions, titles, etc.
 Thus those properties are a replacement for the meta tags, but being focussed on 1 specific share component level (in contrast to meta tags, that are url level).
 Here is an example :

  ```
     [properties]='{title:'my title', description:'my desc', img:' an image', via:'Ced_VDB', hashtags:'someHashTag'}'
  ```

 Note that url properties doesn't appear here. It will still use the meta tag (or if not specified the current url). It wouldn't make sens to have an url prop here.
 None of the properties are mendatory but it is advised to be quite exhaustive. Via and hashtags are limited to twitter.

## Thanks for your feedback

Your feedback is very much appreciated as it will be used to improve ngxshare. Feel free to post issues, request for new features or if you want to participate you are welcome to.

You might be interested in following the original creator of this component I forked on twitter as well https://twitter.com/Ced_VDB
