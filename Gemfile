source 'https://rubygems.org'

group :jekyll_plugins do
    gem 'jekyll-livereload'
    gem 'jekyll-image_resizer'
end

require 'rbconfig'
if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
    gem 'rb-fsevent', '<= 0.9.4'
end