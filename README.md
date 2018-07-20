# Ayu Light Hyper Theme
Ayu (light) for Hyper

macOS
![Ayu Light Hyper Theme - macOS]()

Windows
![Ayu Light Hyper Theme - Windows](https://user-images.githubusercontent.com/19519411/43025177-60da658a-8c36-11e8-985c-2a0274f503b1.PNG)

## Installation

### Hyper plugin manager

Use the following command to install the theme.

```bash
$ hyper install hyper-ayu-light
```

### Manual installation

1. Open Hyper preferences with `Cmd +` or using the menu `File/Edit/Preferences`.  
2. Update your list of plugins to include `hyper-ayu-light`, like this:  

```javascript
  plugins: [
    "hyper-ayu-light"
  ]
```

3. Fully reload Hyper (`Cmd + Shift + R`)

## Configuration
Ayu Light Hyper theme is meant to be used as is, but if you feel like you want to 
customize it even further you can use the following configurations.

```javascript
  config: {
    ayu: {
      // true will hide all borders; false will display them.
      noBorder: boolean 

      // true will display the tab border; false will hide them.
      // on macOS, this is the opposite of noBorder.
      showTabBorder: boolean,

      // Windows only
      // true will display the header border; false will hide it.
      showHeaderBorder: boolean,

      // Windows only
      // controls the background color of the header
      // e.g #FF00DD, rgb(254, 254, 254), red
      headerBackgroundColor: 'string',

      // Windows only
      // controls the foreground color of the header (title and windows controls)
      // e.g #FF00DD, rgb(254, 254, 254), red
      headerForegroundColor: 'string'
    }
  }
```

## Related

- [Hyper](https://hyper.is/)
- [Ayu for Sublime Text](https://github.com/dempfi/ayu)
- [Ayu for Vim](https://github.com/ayu-theme/ayu-vim)
- [Ayu (dark) for Hyper](https://github.com/licatajustin/hyper-ayu)
- [Ayu (mirage) for Hyper](https://github.com/weirdpattern/hyper-ayu-mirage)

## License
MIT © Patricio Trevino
