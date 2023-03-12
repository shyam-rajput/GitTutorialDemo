// Git: File Status Lifecycle

// 1) untracked
// 2) unmodified
// 3) modified
// 4) stages

// Maanlo hamari F1, F2 and F3 files hai, Initially aapki ye files 'untracked' hogi bydefault, ab aap add comman chalaayenge pehli baar tab kya hoga unko track karna start kar diya jaayega, track karne se bho files 'unmodified' ban jaayengi, ab agar aap in unmodified files me se F1 file ko change kar dete ho to yeh F1 file 'modified' ban jaayegi, ab aapko is F1 modified file ko staging area me daalne ke liye waapas se add command chalaani padegi, staging area me aa jaane ke baad aap F1 file ko commit kar sakte ho, commit karne ke baad aapki F1 file unmodified ban jaayegi.

/////////////////////////////////////////////

// touch .gitignore :

// Use for Ignoring Files in Git. touch .gitignore command se ek new .gitignore file ban jaayegi, ab aapko jis file ko ignore karna hai us file ka name aapko .gitignore file me add kar dena hai

// Aap directory (folder) ko bhi ignore kar sakte hai, iske liye aapko .gitignore file ke ander 'dir/' add kar dena hai.

// blank folder ko Git bydefault ignore kar deta hai.

// *.log  :  agar aapne .gitignore me yeh lik diya to isse sabhi log files ignore ho jaayegi.

/////////////////////////////////////////////

// git diff :

// Showing Changes Between Commits/Staging Area & Working Directory

// git diff command, compaire karta hai staging area ko aapki working directory se.

// git diff --staged :

// git diff --staged command compaire karta hai aapke pichle commit ko aapke abhi ke staging area se.

/////////////////////////////////////////////

// Git: Skipping The Staging Area

// git commit -a -m 'my message' :

// Yeh command aapki saari tracked files ko stage karke unka ek commit bana deta hai, lekin agar aapke pass koi untracked file hai bho nahi jaayegi commit me, untracked file ko aapko specifically add karna padega staging area me aap direct commit nahi kar sakte isko.
