module.exports = (conf) => {
    conf.addPassthroughCopy('img');
    conf.addPassthroughCopy('css');

    conf.addPassthroughCopy('favicon.ico');
    conf.addPassthroughCopy('manifest.json');

    return {
        dir: {
            output: 'dist'
        }
    };
};
