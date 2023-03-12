// GitHub: Working with Remote Repositories

// Remote Repository matlab aapki bho repository jo kisi server par host hai or waha se aap usko pull and push kar sakte hai. And ham Git ka use katre hai ek server (like: Github server) par saara ka saara code host karne ke liye, jisse host karne ke baad multiple log us code ko waha se pull kar sakte hai and uske ander code ko push kar sakte hai.

// Github ek website hai jo ki Git Repository ko host karta hai.

// Github se agar me pull karunga apne computer ke ander to saara ka saara code history ke sath ki kya kya chnages hue hai unke sath mere computer me aa jaayega, or agar me isme push karta hu to incremental push hoga yaani ki sirf bho cheez push hogi jo mane push ki hai.

// git remote add origin https://github.com/shyam-rajput/GitTutorialDemo.git

// above command ka matlab hai ki, git remote add kardo ek url ko jiska name origin rak raha hu, to hamari jaha git repository hai us website ka name 'origin' rak diya hai or hamne isko as a remote add kar diya hai  (aap origin ki jagah kuch bhi name rak sakte hai but best practice ke liye origin he rakte hai). Yaani ki aap origin kehlo ya pura url kehlo ek he baat hai, ab origin ka matlab hai haari git repository ka url.

// Push changes in git repository:

// git push -u origin main

// Jab bhi aap git push karne ki command chalaoge tab aapko github sigin karna padega authenigation ke liye.

// In the latest version of git there was no need to add the SSH keys ... it just asked for sign in and authentication was granted.

// In the current version of git. There is no 'master branch' it changes into the 'main branch'. Currently 'main' is the default branch.
