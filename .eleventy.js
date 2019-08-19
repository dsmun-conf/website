module.exports = (conf) => {
    conf.addPassthroughCopy({
        static: '/'
    });

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
