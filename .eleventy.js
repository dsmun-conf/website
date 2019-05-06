module.exports = (conf) => {
    conf.addPassthroughCopy('css');
    conf.addPassthroughCopy('js');
    conf.addPassthroughCopy('img');

    conf.addPassthroughCopy('favicon.ico');
    conf.addPassthroughCopy('manifest.json');

    conf.setPugOptions({ basedir: '.' });

    return {
        dir: {
            output: 'dist',
            includes: 'partials',
            layouts: 'layouts'
        },
        jsDataFileSuffix: '.data'
    };
};
