# 🍀 Contribution Guidelines:


We want to make contributing to this project as easy and as transparent as possible, whether it's:<br>

- Reporting a bug :bug:

- Submitting a fix :mag_right:

- Proposing new features :bulb:

If you wish to contribute to this project, please raise an issue and wait for the project maintainers to approve it or give feedback before making a change.

This documentation contains a set of guidelines to help you during the contribution process. We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. 

##   1. Setting up the Project

**1.**  Fork [this](https://github.com/JuniorN1/Api-pokemon-and-digimons) repository.

**2.**  Clone your forked copy of the project.
```
git clone https://github.com/<your_user_name>/Api-pokemon-and-digimons.git
```
**3.** Navigate to the project directory :file_folder: .
```
cd Api-pokemon-and-digimons
```
**4.** Add a reference to the original repository.
```
git remote add upstream https://github.com/JuniorN1/Api-pokemon-and-digimons.git 
```
**5.** Check the remotes for this repository.
```
git remote -v
```
**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).
```
git pull upstream main
```

##  2. Contributing to the Project

- Once the issue has been assigned to you, start working on the changes

**1.** Create a new branch (DO NOT name it MAIN or MASTER or anything random).

```
git checkout -b <your_branch_name>
```

**2.** Perfom your desired changes to the code base.
- Make sure that you do not change any code unrelated to the task that you have been assigned
- Comment any new code addition(s)
- Do not mess up the directory structure
- Preview your changes and test them properly before proceding ahead

**3.** Track your changes:heavy_check_mark: 

```
git add . 
```

**4.** Commit your changes .

```
git commit -m "Relevant message"
```

**5.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**6.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.

**7.** Then add an appropriate title and description to your pull request that explains your changes and efforts done.


**8.** Click on `Create Pull Request`.