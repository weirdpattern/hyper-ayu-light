# Ayu Light Hyper Theme
Ayu (light) for Hyper

macOS (no borders)
![Ayu Light Hyper Theme - No border](https://cloud.githubusercontent.com/assets/19519411/26436362/8ca8aea8-40db-11e7-9db8-e14d465c68af.png)

macOS (border)
![Ayu Light Hyper Theme - Border](https://cloud.githubusercontent.com/assets/19519411/26339179/a55b2bd8-3f4b-11e7-9291-5d26b6375d93.png)

Windows (no borders)  
![Ayu Light Hyper Theme - No borders](https://cloud.githubusercontent.com/assets/19519411/26419401/405fc262-4085-11e7-9c45-d3ea21fc14c3.png)

Windows (header border)
![Ayu Light Hyper Theme - Header border](https://cloud.githubusercontent.com/assets/19519411/26419403/40b8a4b8-4085-11e7-8e89-d4b280a49878.png)

Windows (custom header)  
![Ayu Light Hyper Theme - Custom header](https://cloud.githubusercontent.com/assets/19519411/26419400/404d93d0-4085-11e7-960f-288a98af3837.png)

## Installation
1. Open Hyper's preferences with `Cmd +`, (or manually at `~/.hyper.js`).
2. Update your list of plugins to include `hyper-ayu-light`, like this:

```javascript
  plugins: [
    'hyper-ayu-light'
  ]
```

3. Fully reload Hyper (`Cmd + Shift + R`)

## Configuration
You can decide whether to display the tab border or not using the following configuration:

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
MIT © WeirdPattern
