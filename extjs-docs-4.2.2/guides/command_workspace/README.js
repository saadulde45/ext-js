Ext.data.JsonP.command_workspace({"guide":"<h1 id='command_workspace-section-workspaces-in-sencha-cmd'>Workspaces in Sencha Cmd</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/command_workspace-section-prerequisites'>Prerequisites</a></li>\n<li><a href='#!/guide/command_workspace-section-what%27s-a-workspace%3F'>What's a Workspace?</a></li>\n<li><a href='#!/guide/command_workspace-section-generating-a-workspace'>Generating a Workspace</a></li>\n<li><a href='#!/guide/command_workspace-section-configuration'>Configuration</a></li>\n<li><a href='#!/guide/command_workspace-section-generating-pages'>Generating Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-building-pages'>Building Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-sharing-code-between-pages'>Sharing Code Between Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-mixed-applications'>Mixed Applications</a></li>\n<li><a href='#!/guide/command_workspace-section-next-steps'>Next Steps</a></li>\n</ol>\n</div>\n\n<p>This guide introduces the Workspace feature of <a href=\"http://www.sencha.com/products/sencha-cmd/\">Sencha Cmd</a>.\nWorkspaces are designed to support multiple pages that need to share frameworks, packages\nand other code.</p>\n\n<h2 id='command_workspace-section-prerequisites'>Prerequisites</h2>\n\n<p>The following guides are recommended reading before proceeding further:</p>\n\n<ul>\n<li><a href=\"#!/guide/command\">Introduction to Sencha Cmd</a>.</li>\n<li><a href=\"#!/guide/command_app\">Using Sencha Cmd</a>.</li>\n</ul>\n\n\n<h2 id='command_workspace-section-what%27s-a-workspace%3F'>What's a Workspace?</h2>\n\n<p>The process for building a large application starts the same as the process for building\nsingle-page applications. Once an application expands to require multiple pages, certain\ncommon issues arise:</p>\n\n<ul>\n<li>Use of a common copies of the Sencha frameworks (Ext JS and/or Sencha Touch).</li>\n<li>Use of code common across pages.</li>\n<li>Shared or third-party packages.</li>\n</ul>\n\n\n<p>To support these, Sencha Cmd defines the concept of a \"Workspace\". A Workspace is simply a\nfolder that ultimately contains one or more pages, frameworks, packages and other shared\ncode or files. The location of the Workspace root folder should be chosen to facilitate\nthese needs as well as your source control requirements. Any generated applications/pages\ncreated in sub-folders of the Workspace folder regardless of their depth are consider to\nbe members of the Workspace.</p>\n\n<p>Though not a requirement, it is typically the case that the Workspace folder is the root\nfolder in a source control repository.</p>\n\n<p>The exact organization of your pages inside your Workspace is not important to Sencha Cmd.\nFor the sake of simplicity, however, the examples in this guide create all pages as immediate\nsub-folders of the Workspace.</p>\n\n<p><em>Note on terminology.</em> Sencha frameworks-based applications, which employ MVC architecture,\ncall <code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a></code> at the top of the code tree. This can be confusing because these\nframeworks use the term \"application\" to describe each page. In single-page applications,\nthese terms are interchangeable. When your application involves multiple pages, however,\nthis is not the case. This guide uses the term \"page\" in most cases because that is more\nfitting in this context.</p>\n\n<h2 id='command_workspace-section-generating-a-workspace'>Generating a Workspace</h2>\n\n<p>To generate a Workspace, use this command:</p>\n\n<pre><code>sencha generate workspace /path/to/workspace\n</code></pre>\n\n<p>This will create the following structure in the specified folder.</p>\n\n<pre><code>.sencha/                # Sencha-specific files (e.g. configuration)\n    workspace/          # Workspace-specific content (see below)\n        sencha.cfg      # Configuration file for Sencha Cmd\n        plugin.xml      # Plugin for Sencha Cmd\n</code></pre>\n\n<p>The above directory structure should be familiar as it was part of the structure created\nfor single-page applications. In this case, however, only the \".sencha/workspace\"\nfolder is created.</p>\n\n<h2 id='command_workspace-section-configuration'>Configuration</h2>\n\n<p>Configuration is similar to that for applications. The file <code>\".sencha/app/sencha.cfg\"</code>\nholds configuration for one page (\"app\").</p>\n\n<p>Unlike the single-page application, the <code>\".sencha/workspace/sencha.cfg\"</code> file is now useful\nfor setting configuration properties for all pages in the Workspace.</p>\n\n<h3 id='command_workspace-section-framework-locations'>Framework Locations</h3>\n\n<p>The location of Sencha Ext JS or Sencha Touch (i.e., the \"SDK\" or \"framework\") is stored\nas a configuration property of the Workspace. This allows multiple pages to share this\nconfiguration. Different teams will have different preferences on these locations and\nwhether or not the Sencha SDK's are stored in their source control system. The settings\ndiscussed below give you control over the location of Sencha SDK's in your Workspace.</p>\n\n<p>By default, a Workspace that has both Sencha Ex JS and Sencha Touch SDK's will have these\nproperty settings in <code>\".sencha/workspace/sencha.cfg\"</code>:</p>\n\n<pre><code>ext.dir=${workspace.dir}/ext\ntouch.dir=${workspace.dir}/touch\n</code></pre>\n\n<p>The value of the <code>workspace.dir</code> property is determined by Sencha Cmd and is expanded as\nneeded. In other words, by default, a Workspace contains a copy of the SDK's used by the\napplications it holds.</p>\n\n<p>Applications reference their framework indirectly using the <code>app.framework</code> property in\ntheir <code>\".sencha/app/sencha.cfg\"</code> file:</p>\n\n<pre><code>app.framework=ext\n</code></pre>\n\n<h2 id='command_workspace-section-generating-pages'>Generating Pages</h2>\n\n<p>Once you have a Workspace, generating pages (\"apps\") is the same as before:</p>\n\n<pre><code>sencha -sdk /path/to/ext generate app ExtApp /path/to/workspace/extApp\n</code></pre>\n\n<p>You can also generate Sencha Touch applications in the same workspace:</p>\n\n<pre><code>sencha -sdk /path/to/touch generate app TouchApp /path/to/workspace/touchApp\n</code></pre>\n\n<p>Because the target of these generated pages is in a Workspace, the following structure\nwill be created (which is slightly different than for a single-page app):</p>\n\n<pre><code>.sencha/                    # Sencha-specific files (e.g. configuration)\n    workspace/              # Workspace-specific content (see below)\n        sencha.cfg          # Workspace's configuration file for Sencha Cmd\n        plugin.xml          # Workspace plugin for Sencha Cmd\n\next/                        # A copy of the Ext JS SDK\n    ...\n\ntouch/                      # A copy of the Sencha Touch SDK\n    ...\n\nextApp/\n    .sencha/                # Sencha-specific files (e.g. configuration)\n        app/                # Application-specific content\n            sencha.cfg      # Application's configuration file for Sencha Cmd\n\ntouchApp/\n    .sencha/                # Sencha-specific files (e.g. configuration)\n        app/                # Application-specific content\n            sencha.cfg      # Configuration file for Sencha Cmd\n\nbuild/                      # The folder where build output is placed.\n    production/             # Build output for production\n        touchApp/\n        extApp/\n    testing/                # Build output for testing\n        touchApp/\n        extApp/\n</code></pre>\n\n<p>To generate more pages, repeat the above command.</p>\n\n<h2 id='command_workspace-section-building-pages'>Building Pages</h2>\n\n<p>The process for building each page of a multi-page application is to run this command\nfrom each of the appropriate folders:</p>\n\n<pre><code>sencha app build\n</code></pre>\n\n<p>For efficiency, you can create a script for this process, perhaps using Sencha Cmd's\n<a href=\"#!/guide/command_ant\">Ant Integration</a>.</p>\n\n<h2 id='command_workspace-section-sharing-code-between-pages'>Sharing Code Between Pages</h2>\n\n<p>When applications scale to multiple pages it is critical to have efficient means to share\ncode between them. There are two choices for doing this in a Workspace:</p>\n\n<ul>\n<li>Packages</li>\n<li><code>workspace.classpath</code></li>\n</ul>\n\n\n<h3 id='command_workspace-section-packages'>Packages</h3>\n\n<p>Sencha Cmd provides a powerful package management subsystem that can be used to download\nand integrate packages of JavaScript, Sass and resources into your applications. This was\ndiscussed in the single-page application guides, but in the context of a Workspace, these\npackages are simply shared. They are downloaded only once and are stored, by default, in\nthe <code>\"./packages\"</code> folder of the Workspace.</p>\n\n<p>To change the location of shared packages, you can change <code>workspace.packages.dir</code> in the\n<code>\".sencha/workspace/sencha.cfg\"</code> file.</p>\n\n<h3 id='command_workspace-section-workspace.classpath'>workspace.classpath</h3>\n\n<p>When shared JavaScript code is needed by multiple pages of an application and not by other\napplications outside the Workspace, you can use this configuration option to automatically\ninclude source folders in all applications. This property tells Sencha Cmd to scan these\nshared code folders during a <code>sencha app build</code> command. Here's how to do that.</p>\n\n<p>Let's add a <code>common</code> folder to the Workspace, like so:</p>\n\n<pre><code>.sencha/\n    workspace/\n    ...\ncommon/             # Folder for common things between pages.\n    src/            # Folder for common JavaScript code for all pages.\n</code></pre>\n\n<p>To include <code>common/src</code> when building all pages in the application, add the follow to\n<code>\".sencha/workspace/sencha.cfg\"</code>:</p>\n\n<pre><code>workspace.classpath=${workspace.dir}/common/src\n</code></pre>\n\n<p>This adds the following component to the default classpath:</p>\n\n<pre><code>${framework.classpath},${workspace.classpath},${app.classpath}\n</code></pre>\n\n<h2 id='command_workspace-section-mixed-applications'>Mixed Applications</h2>\n\n<p>Beyond sharing code between multiple Ext JS pages, or between multiple Sencha Touch\napplications, there is often the need to share code across the two Sencha frameworks.\nWhile the frameworks have a lot in common, they differ in many significant aspects,\nparticularly in the areas of UI components and layouts, which one would expect given that\nthey target such different device environments. Even with these differences, it's possible\nto share code between the two frameworks, for example, sharing code between two model\nclass definitions.</p>\n\n<p>In some cases, however, if you have a mixed application Workspace, you may need to isolate\nyour common code by framework. One way to do this is to set the <code>workspace.classpath</code> like\nthis:</p>\n\n<pre><code>workspace.classpath=${workspace.dir}/common/src,${workspace.dir}/common/src-${framework.name}\n</code></pre>\n\n<p>With this definition, the Workspace would look like this:</p>\n\n<pre><code>.sencha/\n    workspace/\n    ...\ncommon/             # Folder for common things between pages.\n    src/            # Folder for common JavaScript code for all pages.\n    src-ext/        # Folder for common JavaScript code for Ext JS pages.\n    src-touch/      # Folder for common JavaScript code for Sencha Touch pages.\n</code></pre>\n\n<h2 id='command_workspace-section-next-steps'>Next Steps</h2>\n\n<ul>\n<li><a href=\"#!/guide/command_code\">Compiler-Friendly Code Guidelines</a></li>\n<li><a href=\"#!/guide/command_packages\">Sencha Cmd Packages</a></li>\n<li><a href=\"#!/guide/command_advanced\">Advanced Sencha Cmd</a></li>\n</ul>\n\n","title":"Workspaces in Sencha Cmd"});