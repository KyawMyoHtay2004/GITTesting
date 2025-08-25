// Github Commands
ls// List files in the current directory(Linux)
dir// List files in the current directory(Windows)

cd// Change directory
cd..// Move up one directory

clear// Clear the terminal screen (Linux)
cls// Clear the terminal screen (Windows)
exit// Exit the terminal

mkdir// Create a new directory

code// Open Visual Studio Code
code .// Open current directory in Visual Studio Code -->

//----------------------------------------------------------------------
// Modified
git init// Initialize a new Git repository
dir -force// List all files including hidden files (Windows)
dir -a// List all files including hidden files (Linux)

git status// Show the working tree status

// staging
git add "<file>" .// Stage all changes for the next commit
git add .// Stage all changes for the next commit

// go to modified
git rm --cached "<file>"// Unstage a file from the staging area

//go to commit
git commit -m "message"// Commit staged changes with a message

git log// Show commit logs
git log --oneline// Show commit logs in a compact format

// checkout commit (Safe)
git checkout <commit_id>// Switch to a specific commit
git checkout master// Switch to the master commit

// Revert commit (Safe)
git revert <commit_id>// Revert a specific commit
ctrl + x + y// Save changes and exit

//Reset commit (Dangerous) (can't get commit back)
git reset <commit_id> --hard// Reset to a specific commit, discarding all changes after it

//branch
git branch -a// List all branches
git branch "<branch_name>"// Create a new branch
git checkout "<branch_name>"// Switch to a specific branch

git checkout -b "<branch_name>"// Create and switch to a new branch
ctrl + i//switch to chatGPT


