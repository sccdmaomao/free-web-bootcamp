const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) {
        console.error(`couldn't find section ${id}`)
        return
    }

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
    })
}

export default scrollToSection
