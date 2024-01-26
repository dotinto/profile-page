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

socials.forEach(s => {
	var reg = /\b(?:https?:\/\/)?(?:www\.)?(?:github\.com|facebook\.com|discord\.gg|linkedin\.com|twitter\.com|instagram\.com)\b/;
	
	if (!reg.test(config.socials[s])) {
		throw new Error(`Invalid URL provided in '${s}'`)
	}
	
    if (config.socials[s] !== "") {
        document.querySelector(`div.socials .${s}-link`).setAttribute("href", config.socials[s])
        document.querySelector(`div.socials .${s}-link`).classList.remove("_hidden")
    }
})

