#!/bin/bash

echo "Identifying unused libraries..."
npx depcheck > unused-libraries.txt

echo "Removing unused libraries..."
grep -oP '(?<=Unused dependencies:\n)(.*?)(?=\n)' unused-libraries.txt | tr -d '[:space:]' | xargs -n 1 npm uninstall

echo "Cleaning up node_modules and package-lock.json..."
rm -rf node_modules package-lock.json
npm install

echo "Unused libraries have been removed and project cleaned."

# chmod +x remove-unused-libraries.sh
# ./remove-unused-libraries.sh