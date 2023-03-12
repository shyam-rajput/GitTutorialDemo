// Git: Three Stage Architecture

// 1) Working Directory
// 2) Staging Area
// 3) Git Directory

// 1) Working Directory: Matlab aapko apne folder ke ander kya dikayi deta hai usko kehte hai working directory.

// 2) Staging Area: Staging area aapki bho files hoti hai jo ki aap chaayenge ki agle commit me jaaye, ab maanlo aap kuch files ko nahi chahte ki bho agle commit me jaaye to aap unko agle commit me jaane se rokne ke liye aap un files ko staging area me mat daalo to bho files agle commit me nahi jaayegi. Commit ka matlba hai ek sanpshot. Stage karne ka matlab hai ki aap bho files agle commit me jaane ke liye teyaar hai.

// 3) Git Directory (Repository): Git directory ek .git name ka hidden folder hota hai, git apna pura data is hidden folder me rakega all the snapshots etc ye sab isi .git folder directory me honge, or ab Git ki reponsbility hogi ki aapke command ke according proper version nikaalkar aapki working directory me rak dega. Matlab aapne Git ko command di ki muje 5 din pehle waali files dikado tab ye Git, .git folder directory se 5 din pehli files ko laakar de dega matlab 5 din pehle jaisa aapka project dikaayi deta tha ab wesa he dikaayi dega, iska baad agar aapko phir se apni new files laani hai to aap unhe phir se laa sakte ho.

// Note: Jis folder ko ham track karte hai usi ko ham Repository bolte hai.
