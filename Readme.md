Merupakan file yang ditulis menggunakan bahasa md (mark down)
mark down adalah penulisan doc di dalam web

# PRAKTEK GIT

## Inisialisasi GIT

```bash
$ git init
```

## Interim Changing (Staging)

Menyimpan perubahan sementara dari working directory ke dalam staging area

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
