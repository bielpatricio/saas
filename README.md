# Next.js SaaS + RBAC

<!-- TABLE OF CONTENTS -->

## Contents

<p align="center">
  <p><a href="#about-the-project" title=" go to About the Project">About The Project</a></p>
  <p><a href="#features" title=" go to Features">Features</a></p>
  <p><a href="#prints" title=" go to Print">Print</a></p>
  <p><a href="#running-locally" title=" go to Running locally">Running locally</a></p>
  <p><a href="#contact" title=" go to Contact">Contact</a></p>
</p>

<br>
<!-- ABOUT THE PROJECT -->

# About The Project

This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

<br>

## Features

### Authentication

- [X] It should be able to authenticate using e-mail & password;
- [X] It should be able to authenticate using Github account;
- [X] It should be able to recover password using e-mail;
- [X] It should be able to create an account (e-mail, name and password);

### Organizations

- [X] It should be able to create a new organization;
- [X] It should be able to get organizations to which the user belongs;
- [X] It should be able to update an organization;
- [X] It should be able to shutdown an organization;
- [X] It should be able to transfer organization ownership;

### Invites

- [X] It should be able to invite a new member (e-mail, role);
- [X] It should be able to accept an invite;
- [X] It should be able to revoke a pending invite;

### Members

- [X] It should be able to get organization members;
- [X] It should be able to update a member role;

### Projects

- [X] It should be able to get projects within a organization;
- [X] It should be able to create a new project (name, url, description);
- [X] It should be able to update a project (name, url, description);
- [X] It should be able to delete a project;

### Billing

- [ ] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

## RBAC

Roles & permissions.

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                        | Administrator | Member | Billing | Anonymous |
| ---------------------- | ------------- | ------ | ------- | --------- |
| Update organization    | ✅            | ❌     | ❌      | ❌        |
| Delete organization    | ✅            | ❌     | ❌      | ❌        |
| Invite a member        | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite       | ✅            | ❌     | ❌      | ❌        |
| List members           | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership     | ⚠️          | ❌     | ❌      | ❌        |
| Update member role     | ✅            | ❌     | ❌      | ❌        |
| Delete member          | ✅            | ⚠️   | ❌      | ❌        |
| List projects          | ✅            | ✅     | ✅      | ❌        |
| Create a new project   | ✅            | ✅     | ❌      | ❌        |
| Update a project       | ✅            | ⚠️   | ❌      | ❌        |
| Delete a project       | ✅            | ⚠️   | ❌      | ❌        |
| Get billing details    | ✅            | ❌     | ✅      | ❌        |
| Export billing details | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;
  
## Prints

![image](https://github.com/bielpatricio/saas/assets/32223762/649a8e37-92b4-495b-bc0a-0f686646d8fe)

![image](https://github.com/bielpatricio/saas/assets/32223762/020d83d3-b757-4d79-8fee-97fed2ba69ad)

![image](https://github.com/bielpatricio/saas/assets/32223762/a9d29878-4464-4dd3-8b8d-8474f7b7adb1)

![image](https://github.com/bielpatricio/saas/assets/32223762/905d80c6-552e-4640-bb80-3684e9328410)

![image](https://github.com/bielpatricio/saas/assets/32223762/874e693c-d8dc-4e80-aa9a-bc2d7826416a)

![image](https://github.com/bielpatricio/saas/assets/32223762/d2134f9a-991e-4d8c-96e9-f4aac93c5204)

<br>

# Running locally

```bash
# Clone this repository
$ git clone https://github.com/bielpatricio/saas.git
# Access the project folder in your terminal
$ cd saas
# Install the dependencies
$ pnpm i
# create a .env and will need 3 variables, the NEXT_URL=http://localhost:3000, the STRIPE_PUBLIC_KEY, and STRIPE_PRIVATE_KEY, this two you will need to take from https://dashboard.stripe.com/test/dashboard, if you don't have an account, create one and create some products there.
# Run the application in development mode
$ pnpm run dev
```

<br>

# Contact

Gabriel Patrício - gabrieltp087@gmail.com - [https://github.com/bielpatricio/](https://github.com/bielpatricio)

<p align="right">(<a href="#top">back to top</a>)</p>
