<!-- PROJECT SHIELDS -->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<br />
<div align="center">
  <a href="https://github.com/odhyp/wedding-invitation">
    <img src="assets/img/logo.png" alt="Logo" width="auto" height="75">
  </a>

<h3 align="center">Wedding Invitation</h3>

  <p align="center">
    A simple and elegant wedding invitation
    <br />
    built with Hugo, TailwindCSS, Python, and Next.js
    <br />
    <a href="https://github.com/odhyp/wedding-invitation"><strong>Live Preview »</strong></a>
    <br />
    <br />
    <a href="https://github.com/odhyp/wedding-invitation/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/odhyp/wedding-invitation/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

TODO: this section

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Frontend Requirements**:

  - Hugo (Static Site Generator)
  - Node.js (Installing packages and TailwindCSS)
  - Python (Generating invitation pages)

- **Backend Requirements**:

  - Supabase credentials (for the Wishes API)

### Installation

#### Frontend

1. Clone the Repository and navigate to the project directory:

   ```bash
   git clone https://github.com/odhyp/wedding-invitation.git && cd wedding-invitation
   ```

2. Install Frontend Dependencies:

   ```bash
   cd frontend && npm install
   ```

3. Fill `data/guest.txt` with guests name in each line
4. Run `main.py`

   ```bash
   python main.py
   ```

5. Voila! You can share the link to your guests using

   ```html
   https://your-site.com/guest_name
   ```

#### Backend

1. To set up the Backend, navigate to backend directory and create a `.env` file with your credentials:

   ```bash
   cd backend
   ```

   ```bash
   SUPABASE_PASS=<Your_Supabase_Password>
   DATABASE_URL=<Your_Connection_Pooling_URL>
   DIRECT_URL=<Your_Direct_Connection_URL>
   ```

<!-- USAGE EXAMPLES -->

## Usage

TODO: Fill this

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/odhyp/wedding-invitation/issues) for a full list of proposed features (and known issues).

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

### Top contributors:

<a href="https://github.com/odhyp/wedding-invitation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=odhyp/wedding-invitation" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Anggi Permata](https://github.com/psychoctatorrr) - Layout and Design
- [Firdig Alfalakhi](https://github.com/Firkhie) - Wishes API (Backend)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/odhyp/wedding-invitation.svg?style=for-the-badge
[contributors-url]: https://github.com/odhyp/wedding-invitation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/odhyp/wedding-invitation.svg?style=for-the-badge
[forks-url]: https://github.com/odhyp/wedding-invitation/network/members
[stars-shield]: https://img.shields.io/github/stars/odhyp/wedding-invitation.svg?style=for-the-badge
[stars-url]: https://github.com/odhyp/wedding-invitation/stargazers
[issues-shield]: https://img.shields.io/github/issues/odhyp/wedding-invitation.svg?style=for-the-badge
[issues-url]: https://github.com/odhyp/wedding-invitation/issues
[license-shield]: https://img.shields.io/github/license/odhyp/wedding-invitation.svg?style=for-the-badge
[license-url]: https://github.com/odhyp/wedding-invitation/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
