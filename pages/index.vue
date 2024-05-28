<template>
    <div class="container">
        <NuxtPicture src="/avatar.png" width="200" height="200" alt="Matt's Avatar" id="avatar" class="avatar" :placeholder="[200, 200, 75, 5]" format="webp"/>
        <header>
            <h1 id="name">Hi, I'm Matt 👋</h1>
            <p id="pronouns">they/them</p>
        </header>
        <hr />
        <ul class="links">
            <!-- <li>
                Placeholder for spotify player
            </li> -->
            <li>
                <a href="https://discord.com/users/366652352125599744" target="_blank" rel="noopener noreferrer" title="Discord">
                    <NuxtIcon id="discord-icon" name="discord" />
                </a>
            </li>
            <li>
                <a href="https://github.com/MattA-Official" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <NuxtIcon id="github-icon" name="github" />
                </a>
            </li>
            <!-- <li>
                <a href="https://twitter.com/MattA_Official" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                    <NuxtIcon id="twitter-icon" name="twitter" />
                </a>
            </li> -->
            <li>
                <a href="mailto:hello@matt-is.gay" target="_blank" rel="noopener noreferrer" title="Email">
                    <NuxtIcon id="email-icon" name="email" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
}

hr {
    width: 100%;
    border: 2px solid rgba(41, 46, 51, 0.308);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  width: fit-content;
}

.links a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
}

.nuxt-icon svg {
  width: 2em;
  height: 2em;
  color: #000;
  transition: color 0.6s ease;
}

.links a:hover .nuxt-icon svg, .links a:focus .nuxt-icon svg {
  color: #fff;
}

#pronouns {
  font-size: 0.85rem;
  color: #242424d8;
  font-weight: 400;
}

.avatar {
  margin: 0 auto;
}

.avatar img {
  border-radius: 50%;
}
</style>