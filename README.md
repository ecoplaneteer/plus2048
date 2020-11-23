[![license](https://badgen.net/npm/license/lodash)]()  

<br />
<p align="center">
  <img src="https://lh3.googleusercontent.com/tBQouybR60opLNoFHcP8TXfSdCJso6SoiftJvU_d7xuM9ayeVG_k8MkHlq36yV5myNnT=s180" alt="Logo" width="80" height="80">
  

  <h3 align="center">2048+</h3>

  <p align="center">
    An awesome 2048 game allowing two (or more) players to play this on the same board at the same time.
    <br />
    <br />
    <br />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](2048+.gif)

It’s been a while since the time-wasting game 2048 was introduced (you can play the original version [here](​https://gabrielecirulli.github.io/2048/)​ and cloned multiple times. This time you will be developing it from scratch and introducing some new aspects to it.
The basic goal is to slide numbered tiles in one of four directions. Tiles of the same values pushed together merge into a new tile of their combined value. The game is won when a tile of value 2048 is created.

### Specifications
* The grid consists of 6x6 tiles
* At the beginning of a game the grid is empty, except for one tile of value 2 placed at
random.
* The user can slide the tiles either up, down, left or right
* After each slide a new tile with value 1 will appear in a random free space.
  * If there is no free space to put the new tile the game is lost
* During the slide, tiles of equal values pushed into each other will merge into a new
tile with the combined value. 2 + 2 = 4
  * If there are 3 values next to each other, e.g. 2 2 2, and the player slides right,
the values closest to the wall should merge first resulting in 2 4. 
* If any tile reaches the value 2048 the game is won.

### Features
- Users can play 2048 on the same page
- Online users can chat each other
- Users can switch anarchy and democracy game mode

### Built With

* [Vue](http://vuejs.org/)
* [Phoenix Framework](https://www.phoenixframework.org/)

Phoenix framework is used to built the back-end and Vue.js is used to buil the front-end.


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* mix
  ```sh
  brew install elixir
  ```
* mysql
  ```sh
  brew install mysql
  ```

### Installation

Enter your mysql root usernamd and password in `config/dev.exs`
   ```elixir
   username: "root",
   password: "password",
   ```

### Run

   ```sh 
   sh start_2048.sh
   ```

### Test
  ```
  yarn test:unit
  ```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Vue.js](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Styled Component](https://www.styled-components.com/)
* [Vue class component](https://class-component.vuejs.org/)
* [Vuex class component](https://github.com/michaelolof/)
* [Elixir](https://elixir-lang.org/)
* [Phoenix Framework](https://www.phoenixframework.org/)
* [Phoenix Channels](https://hexdocs.pm/phoenix/channels.html)
* [tty2048](https://github.com/lexmag/tty2048)
* [Jest](https://jestjs.io/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: 2048+.gif