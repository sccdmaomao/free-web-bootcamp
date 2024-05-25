const normalizeHrefTitle = (title: string) => {
    return title.replace(/\s/g, '-')
}

export default normalizeHrefTitle
