// Why is Git?

// Git is a version control sysytem (VCS). We use Git for keep tracking the files

// Version control system helps us to keep tracking the files.

// Benefits of version control system (VCS):

// 1) Easily Recover Files
// 2) Who introduced an issue and when?
// 3) Roll back to previously working state.

// History of VCS:

// Local VCS:

// In Local VCS, Database to keeptrack of files, not add files in the server.
// Props of Local vcs: can track files and Rollback.
// Cons of vcs: If we lose our hardware then everything is lost.

// Centralized VCS:

// In Centralized VCS, a server acts as the main centralized repository which stores every version of code. Agar centralize server me kuch problrm aa gayi to pura data chala jaayega and ham Rollback and files ko tracks bhi nahi kar paayenge, isliye is problem ko solve karne ke liye aaya Distributed Version control System.

// Distributed VCS:

// Distributed VCS me sabhi logo ke pass complete Repository (Complete Project) aa jaati hai jo server ke pass hoti hai, or ab agar server damnage bhi ho jaata hai to pura ka pura backup aapke computer ke pass hai, aap phir se us server me pura code daal sakte hai, jabki Centralized VCS me sirf server ke pass he repository hoti thi hamare computer ke pass nahi, isliye hamG it ka use karte hai kyuki Git ek Distrubuted Version Control system hai.

// What is centralized VCS vs distributed VCS?

// The main difference between centralized and distributed version control is that, in centralized version control, the versions are saved in the remote repository, while in distributed version control, versions can be saved in the remote repository as well as in local repositories of the local machines

// What is GitHub?

// Github is a Git Repository hosting service, matlab Github ek website hai jo Git Repository ko host karti hai.

// Git Features:

// 1) Sanpshot: Jab ham ek Git repository banate hai to sabse pehle ek .git folder banta hai or is .git folder ke ander aapke pure project ki history hoti hai isme se aap latest version ya old version file ko bhi nikaal sakte hai kuch commands ko run karke. .git folder ek hidden folder hota hai jisme aapke project ki saari history hoti hai or ye sanpshot ko save karta hai yaani aapko abhi commit karna hai to aap is snapshot ko save kar sakte ho or baad me waapas kabhi bhi laa sakte ho.

// 2) Almost every opertion is local: Matlab aapke mostly operation aapke local computer me he hote hai aapko kisi server me push karne ki jarulat nahi hai aap aaram se apne computer me kaam kar sakte hai or uske baad aap Remote Git Repository me yaani ki ek centralize server me like Github me aap push kar sakte hai apni repository ko.

// Git Installation:

// Git install karne ke baad hame yeh 2 cheeze milengi:

// Git Commond Line Tool
// Git base(terminal program)

// 3 commands:
// cd : change directory
// pwd : present working directory dekne ke liye
// ls : content ko list karta hai jo  bhi folder me hoga

// Aapko jis folder me project banana hai ya Git ka use karne hai us folder me jaakar right click karke Git Base ko open karle isse bydefault aapki directory Git base me isi project waale folder ki hogi.

// Git ko apni identity bataye using user name and user email, isse agar aap kuch commit karo to dusre logo ko pata lag jaaye ki kisne commit kiya hai:

// git config --global user.name "Shyam"
// git config --global user.email "ssrshyam59@gmail.com"
// git config --list (isse aap check kar paaoge)

// git config user.name
// git config user.email (isse aap user email dek paaoge)
