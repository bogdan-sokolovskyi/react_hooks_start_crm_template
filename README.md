# CRM Mentor 1.0

## Getting Started:

### 1. Generating a new SSH key and adding it to the ssh-agent

```sh
#https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
Open Git Bash:

#paste the text below, substituting in your GitHub email address
ssh-keygen -t rsa -b 4096 -C "your@email.com"

#start the ssh-agent in the background
eval $(ssh-agent -s)

#add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_rsa

#copies the contents of the id_rsa.pub file to your clipboard
clip < ~/.ssh/id_rsa.pub

#GitHub -> Settings -> SSH and GPG keys -> Add SSH key
```

### 2. Clone a Project from GitHub

```sh
git clone git@github.com:bogdan-sokolovskyi/react_hooks_start_crm_template.git
cd react_hooks_start_crm_template
npm i
npm start

Host: http://localhost:3333
```

## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm run build`
### `npm run lint`
### `npm run lint:fix`
