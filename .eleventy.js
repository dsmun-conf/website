module.exports = (conf) => {
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
