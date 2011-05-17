Sandwiches
=================

**A Sandwich is a stack of 3 songs, to be enjoyed in a certain order.** This is a rails app to help create and share them with your friends. Its based on KZAK (see below). Some technical changes from KZAK include:

*   fragment caching (stored with memcached via the dalli gem).
*   pagination with will_paginate.
*   no longer uses carrierwave to handle uploads. instead uses a patched version of the s3-uploadify plugin to pipe song files directly to the S3 bucket, bypassing the server until after the files are stored.

---
Readme inherited from KZAK below:

About
============

KZAK is a web-based jukebox.
http://github.com/trevorturk/kzak/


Installation
=================

    git clone git://github.com/trevorturk/kzak.git
    gem install bundler
    bundle install
    cp config/database.example.yml config/database.yml
    cp config/config.example.yml config/config.yml
    rake db:create
    rake db:schema:load
    rake db:seed
    script/server
    # http://localhost:3000/


Deployment
====================

    gem install heroku
    heroku create
    # Set the variables for your production environment in config/config.yml
    # Create the bucked you'd like to use on S3
    rake heroku:config
    git push heroku master
    heroku rake db:schema:load
    heroku rake db:seed
    heroku open
    # Read more about Heroku here: http://heroku.com/


Upgrading
===================

    heroku db:pull sqlite://db/backup.sqlite3
    git pull
    bundle install
    # Review possible config changes in config/config.example.yml
    rake heroku:config
    git push heroku master
    heroku rake db:migrate
    heroku open


MIT License
========================

Copyright (c) 2009... Trevor Turk

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.