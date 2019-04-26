module.exports = (conf) => {
    conf.addPassthroughCopy('img');
    conf.addPassthroughCopy('css');
    conf.addPassthroughCopy('js');

    conf.addPassthroughCopy('favicon.ico');
    conf.addPassthroughCopy('manifest.json');

    conf.setPugOptions({ basedir: '.' });

    return {
        dir: {
            output: 'dist',
            includes: 'partials',
            layouts: 'layouts'
        }
    };
};
