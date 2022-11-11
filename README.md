<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/muoi07052001/booking-app-back-end">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Booking App Back End</h3>

  <p align="center">
    The back-end part of the Booking app (Clone from <b>https://booking.com</b> project)
    <br />
    <a href="https://github.com/muoi07052001/booking-app-back-end"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/muoi07052001/booking-app-back-end">View Repo</a>
    ·
    <a href="https://github.com/muoi07052001/booking-app-back-end/issues">Report Bug</a>
    ·
    <a href="https://github.com/muoi07052001/booking-app-back-end/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![Node][node.js]][node-url]
- [![Express][express.js]][express-url]
- [![Module SASS][sass]][sass-url]
- [![AWS][aws]][aws-url]
- [![Nginx][nginx]][nginx-url]

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. [Create a MongoAtlas API key](https://www.mongodb.com/docs/atlas/app-services/authentication/api-key/)
2. Create your own JWT_SECRET (any string will be ok!)
3. Get a API Domain, maybe using [AWS](https://aws.amazon.com/)
4. Clone the repo
   ```sh
   git clone https://github.com/muoi07052001/booking-app-back-end.git
   ```
5. Install packages and dependencies (yarn)
   ```sh
   yarn install
   ```
6. Create a `.env.local` file, enter your API in `.env.local`
   ```js
   MONGO='ENTER YOUR MONGO API';
   JWT_SECRET='YOUR SECRET
   ```

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

How this project can be used. Additional screenshots, code examples and demos. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://booking.com)_

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Authentication / Users
- [x] CRUD Feature
  - [x] CRUD Users
  - [x] CRUD Hotels
  - [x] CRUD Rooms
- [ ] Writting Blog Feature
- [ ] Comment Feature

See the [open issues](https://github.com/muoi07052001/booking-app-back-end/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nguyen Hai Duong - [@facebook_handle](https://www.facebook.com/duong.nguyenhai.7140/) - muoi07052001@gmail.com

Project Link: [https://github.com/muoi07052001/booking-app-back-end](https://github.com/muoi07052001/booking-app-back-end)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [How to deploy Node App on AWS2 EC2 Amazon Linux 2](https://www.youtube.com/watch?v=oHAQ3TzUTro)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/muoi07052001/booking-app-back-end.svg?style=for-the-badge
[contributors-url]: https://github.com/muoi07052001/booking-app-back-end/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/muoi07052001/booking-app-back-end.svg?style=for-the-badge
[forks-url]: https://github.com/muoi07052001/booking-app-back-end/network/members
[stars-shield]: https://img.shields.io/github/stars/muoi07052001/booking-app-back-end.svg?style=for-the-badge
[stars-url]: https://github.com/muoi07052001/booking-app-back-end/stargazers
[issues-shield]: https://img.shields.io/github/issues/muoi07052001/booking-app-back-end.svg?style=for-the-badge
[issues-url]: https://github.com/muoi07052001/booking-app-back-end/issues
[license-shield]: https://img.shields.io/github/license/muoi07052001/booking-app-back-end.svg?style=for-the-badge
[license-url]: https://github.com/muoi07052001/booking-app-back-end/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nguyen-duong-072879247/
[product-screenshot]: images/product-screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[sass]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[aws]: https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white
[aws-url]: https://aws.amazon.com/
[nginx]: https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white
[nginx-url]: https://www.nginx.com/

