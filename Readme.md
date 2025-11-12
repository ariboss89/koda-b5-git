# PRAKTEK GIT

## Inisialisasi GIT

```bash
$ git init
```

## Interim Changing (Staging)

Saving the interim changes from working directory to staging area

```bash
$ git add <...dir_file>
$ git add >...dir_folder>
```

## Permanent Changing (commit)

Save all staging into permanent, commit message based on [conventional commit] (https://www.conventionalcommits.org/en/v1.0.0/), for the type of commit can be refers to (https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

```bash
$ git commit
$ git commit -m "<commit-name>"
```

## Working Directory Checking Status

Can be used to show status whether its in staging area or not

```bash
$ git status
```

Can be used to show the history of commit

```bash
$ git log
```

## Git Remote Management

Can be used to connect between git from local computer to git that is available on the git service system (github, gitlab, dll.)

```bash
$ git remote add <remote-alias> <repository link>
```

Can be used to see remote list

```bash
$ git remote [-v]
```

Can be used to see remote alias

```bash
$ git remote get-url <remote_alias>
```

## Synchronization

Can be used for synchronize from local to remote

```bash
$ git push [-u] <tujuan_remote> <branch_source>
```

Can be used for synchronize from remote to local

```bash
$ git pull <target_remote> <branch_remote>
```

## Copy Remote Repository to Local Computer

Can be used to clone remote repository

```bash
$ git clone <link_remote> [<custom_name>]
```
