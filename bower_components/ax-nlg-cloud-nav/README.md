
## [Preview](http://aexeagmbh.github.io/ax-nlg-cloud-nav/) AX-NLG-CLOUD-NAV
# seed-element

An element providing a starting point for your own reusable Polymer elements.


## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/seed-element/`, where `seed-element` is the name of the directory containing it.

## USE SASS

If you wish to work with sass

     $ sudo apt-get install ruby
You want install Compass to use Sass


[Comapss](http://compass-style.org/install/)

     $ gem update --system
     $ gem install compass

### Now working directory

cd ~sass/

    $ compass watch

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/seed-element/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.





#### Gh ---> Yeoman

You need to install [Yeoman](http://yeoman.io/);

Generates a Github pages branch for your seed-element.

This requires that you have SSH keys setup on GitHub.

Windows users will need to have Git Bash installed

If your documentation or demo pages have dependencies declared as devDependencies in bower.json, they will be included in your GitHub pages branch.

Example:

    cd my-foo
    yo polymer:gh
    
If, for some reason, you don't want the devDependencies, use the --nodevdeps option.

###Github Enterprise

Github Enterprise instances require a custom hostname to be defined. Use the --hostname option.

Example:

    cd my-foo
    yo polymer:gh --hostname custom.host.com
