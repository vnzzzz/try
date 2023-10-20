#!/bin/bash

#---- set up ----
sudo apt-get update
sudo apt-get install -y \
  python-is-python3 \
  git \
  ca-certificates \
  curl \
  gnupg

# node
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y

# Install or update the Azure Developer CLI
sudo curl -fsSL https://aka.ms/install-azd.sh | bash

# Install the Azure CLI on Linux
sudo curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
