document.querySelector(".background-image").setAttribute("style", "--backgroundURL: url(" + config.backgroundURL + ")")
document.querySelector(".profile-avatar").setAttribute("style", "--avatarURL: url(" + config.avatarURL + ")")
document.querySelector(".profile-name").innerHTML = config.name
document.querySelector(".profile-nickname").innerHTML = config.nickname
document.querySelector(".profile-occupation").innerHTML = config.occupation
if (config.name === "") {
    document.querySelector(".profile-name").innerHTML = config.nickname
    document.querySelector(".profile-nickname").innerHTML = ""
}
document.querySelector(".profile-email a span").innerHTML = config.email
document.querySelector(".profile-email a").setAttribute("href", "mailto:" + config.email)

const socials = ["github", "discord", "linkedin", "instagram", "facebook", "twitter"]

if (config.socials.github !== "") {
    document.querySelector("div.socials .github-link").setAttribute("href", config.socials.github)
    document.querySelector("div.socials .github-link").classList.remove("_hidden")
}
if (config.socials.linkedin !== "") {
    document.querySelector("div.socials .linkedin-link").setAttribute("href", config.socials.linkedin)
    document.querySelector("div.socials .linkedin-link").classList.remove("_hidden")
}
if (config.socials.instagram !== "") {
    document.querySelector("div.socials .instagram-link").setAttribute("href", config.socials.instagram)
    document.querySelector("div.socials .instagram-link").classList.remove("_hidden")
}
if (config.socials.twitter !== "") {
    document.querySelector("div.socials .twitter-link").setAttribute("href", config.socials.twitter)
    document.querySelector("div.socials .twitter-link").classList.remove("_hidden")
}
if (config.socials.facebook !== "") {
    document.querySelector("div.socials .facebook-link").setAttribute("href", config.socials.facebook)
    document.querySelector("div.socials .facebook-link").classList.remove("_hidden")
}
if (config.socials.discord !== "") {
    document.querySelector("div.socials .discord-link").setAttribute("href", config.socials.discord)
    document.querySelector("div.socials .discord-link").classList.remove("_hidden")
}