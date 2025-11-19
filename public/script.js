document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if ((currentPath.includes(link.pathname) && link.pathname != "/")) link.classList.toggle('text-active');
        if (currentPath.includes('blog') && !currentPath.includes('create') && link.pathname === "/") link.classList.toggle('text-active');
        console.log("Current: ", currentPath, "NavLink: ", link.pathname);
    })
})