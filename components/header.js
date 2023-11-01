class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div id="nav-container">
                <div id="nav-left">
                    <div class="grid-cell nav-link-1"><a class="header_links" href="/index.html">Home</a></div>
                    <div class="grid-cell nav-link-2"><a class="header_links" href="#">About</a></div>
                    <div class="grid-cell nav-link-3"><a class="header_links" href="#">Projects</a></div>
                    <div class="grid-cell nav-link-4"><a class="header_links" href="#">Feature</a></div>
                    <div class="grid-cell nav-link-5">
                        <a class="header_links" download href="/resume/MatthewFoxResume.pdf">Resume</a>
                    </div>
                    <div class="padding-container"></div>
                </div>
                <div id="nav-right">
                    <div class="padding-container"></div>
                    <div class="github-container">
                        <!--             GitHub Logo, https://github.com/logos -->
                        <a class="header_links" href="https://github.com/Matthew-Fox-NSCC">
                            
                            <picture>
                                <!-- Dark mode version -->
                                <source media="(prefers-color-scheme: dark)"
                                        srcset="/images/logos/github-mark/github-mark/github-mark-white.svg">
                                
                                <!-- Light mode version -->
                                <source media="(prefers-color-scheme: light)"
                                        srcset="/images/logos/github-mark/github-mark/github-mark.svg">
                                
                                <!-- Fallback image -->
                                <img alt="The GitHub Invertocat logo" class="logo"
                                     src="/images/logos/github-mark/github-mark/github-mark.svg">
                            </picture>
                        
                        </a>
                    </div>
                    <div class="linkedin-container">
                        <!--            LinkedIn Logo, https://brand.linkedin.com/downloads -->
                        <a class="header_links" href="https://www.linkedin.com/in/matthew-kenneth-fox/">
                            
                            <picture>
                                <!-- Dark mode version -->
                                <source media="(prefers-color-scheme: dark)" srcset="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                                
                                <!-- Light mode version -->
                                <source media="(prefers-color-scheme: light)"
                                        srcset="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                                
                                <!-- Fallback image -->
                                <img alt="The LinkedIn Bug logo" class="logo linkedin"
                                     src="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            
            <div id="nav-mobile">
                <div class="grid-cell nav-link-1"><a class="header_links" href="/index.html">Home</a></div>
                <div class="grid-cell nav-link-2"><a class="header_links" href="#">About</a></div>
                <div class="grid-cell nav-link-3"><a class="header_links" href="#">Projects</a></div>
                <div class="grid-cell nav-link-4"><a class="header_links" href="#">Feature</a></div>
                <div class="grid-cell nav-link-5"><a class="header_links" href="#">Resume</a></div>
                
                <div id="nav-logo">
                    <!--             GitHub Logo, https://github.com/logos -->
                    <a class="header_links" href="https://github.com/Matthew-Fox-NSCC">
                        
                        <picture>
                            <!-- Dark mode version -->
                            <source media="(prefers-color-scheme: dark)"
                                    srcset="/images/logos/github-mark/github-mark/github-mark-white.svg">
                            
                            <!-- Light mode version -->
                            <source media="(prefers-color-scheme: light)"
                                    srcset="/images/logos/github-mark/github-mark/github-mark.svg">
                            
                            <!-- Fallback image -->
                            <img alt="The GitHub Invertocat logo" class="logo"
                                 src="/images/logos/github-mark/github-mark/github-mark.svg">
                        </picture>
                    </a>
                    
                    <!--            LinkedIn Logo, https://brand.linkedin.com/downloads -->
                    <a class="header_links" href="https://www.linkedin.com/in/matthew-kenneth-fox/">
                        
                        <picture>
                            <!-- Dark mode version -->
                            <source media="(prefers-color-scheme: dark)" srcset="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                            
                            <!-- Light mode version -->
                            <source media="(prefers-color-scheme: light)"
                                    srcset="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                            
                            <!-- Fallback image -->
                            <img alt="The LinkedIn Bug logo" class="logo linkedin"
                                 src="/images/logos/LinkedIn-Logos/LI-In-Bug.png">
                        </picture>
                    </a>
                </div>
            </div>
        </header>
        `;
    }
}


customElements.define('header-component', Header)