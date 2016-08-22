Ext.data.JsonP.Ext_ux_DataViewTransition({"component":false,"autodetected":{"members":true,"extends":true},"mixedInto":[],"superclasses":[],"members":[{"tagname":"property","owner":"Ext.ux.DataViewTransition","name":"cachedStoreData","id":"property-cachedStoreData","meta":{}},{"tagname":"property","owner":"Ext.ux.DataViewTransition","name":"dataview","id":"property-dataview","meta":{}},{"tagname":"property","owner":"Ext.ux.DataViewTransition","name":"dataviewID","id":"property-dataviewID","meta":{}},{"tagname":"property","owner":"Ext.ux.DataViewTransition","name":"defaults","id":"property-defaults","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"constructor","id":"method-constructor","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"cacheStoreData","id":"method-cacheStoreData","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"getAdded","id":"method-getAdded","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"getExisting","id":"method-getExisting","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"getExistingCount","id":"method-getExistingCount","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"getRemaining","id":"method-getRemaining","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"getRemoved","id":"method-getRemoved","meta":{}},{"tagname":"method","owner":"Ext.ux.DataViewTransition","name":"init","id":"method-init","meta":{}}],"author":[{"tagname":"author","name":"Ed Spencer (http://sencha.com)","email":null}],"parentMixins":[],"subclasses":[],"requires":[],"mixins":[],"tagname":"class","uses":[],"extends":null,"alternateClassNames":[],"name":"Ext.ux.DataViewTransition","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition' target='_blank'>DataViewTransition.js</a></div></pre><div class='doc-contents'><p>Transition plugin for DataViews</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cachedStoreData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-property-cachedStoreData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-property-cachedStoreData' class='name expandable'>cachedStoreData</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A cache of existing store data, keyed by id. ...</div><div class='long'><p>A cache of existing store data, keyed by id. This is used to determine\nwhether any items were added or removed from the store on data change</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-dataview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-property-dataview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-property-dataview' class='name expandable'>dataview</a> : <a href=\"#!/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the DataView this instance is bound to</p>\n</div><div class='long'><p>Reference to the DataView this instance is bound to</p>\n</div></div></div><div id='property-dataviewID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-property-dataviewID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-property-dataviewID' class='name expandable'>dataviewID</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The string ID of the DataView component. ...</div><div class='long'><p>The string ID of the DataView component. This is used internally when animating child objects</p>\n</div></div></div><div id='property-defaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-property-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-property-defaults' class='name expandable'>defaults</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default configuration options for all DataViewTransition instances ...</div><div class='long'><p>Default configuration options for all DataViewTransition instances</p>\n<p>Defaults to: <code>{duration: 750, idProperty: 'id'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.DataViewTransition-method-constructor' class='name expandable'>Ext.ux.DataViewTransition</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.ux.DataViewTransition\" rel=\"Ext.ux.DataViewTransition\" class=\"docClass\">Ext.ux.DataViewTransition</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates the plugin instance, applies defaults ...</div><div class='long'><p>Creates the plugin instance, applies defaults</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ux.DataViewTransition\" rel=\"Ext.ux.DataViewTransition\" class=\"docClass\">Ext.ux.DataViewTransition</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cacheStoreData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-cacheStoreData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-cacheStoreData' class='name expandable'>cacheStoreData</a>( <span class='pre'>store</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Caches the records from a store locally for comparison later ...</div><div class='long'><p>Caches the records from a store locally for comparison later</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The store to cache data from</p>\n</div></li></ul></div></div></div><div id='method-getAdded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-getAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-getAdded' class='name expandable'>getAdded</a>( <span class='pre'>store</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all records in the given store that were not already present ...</div><div class='long'><p>Returns all records in the given store that were not already present</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The updated store instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Object of records not already present in the dataview in format {id: record}</p>\n</div></li></ul></div></div></div><div id='method-getExisting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-getExisting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-getExisting' class='name expandable'>getExisting</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all records that were already in the DataView ...</div><div class='long'><p>Returns all records that were already in the DataView</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>All existing records</p>\n</div></li></ul></div></div></div><div id='method-getExistingCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-getExistingCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-getExistingCount' class='name expandable'>getExistingCount</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the total number of items that are currently visible in the DataView ...</div><div class='long'><p>Returns the total number of items that are currently visible in the DataView</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The number of existing items</p>\n</div></li></ul></div></div></div><div id='method-getRemaining' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-getRemaining' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-getRemaining' class='name expandable'>getRemaining</a>( <span class='pre'>store</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all records that are already present and are still present in the new store ...</div><div class='long'><p>Returns all records that are already present and are still present in the new store</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The updated store instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Object of records that are still present from last time in format {id: record}</p>\n</div></li></ul></div></div></div><div id='method-getRemoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-getRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-getRemoved' class='name expandable'>getRemoved</a>( <span class='pre'>store</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all records that are present in the DataView but not the new store ...</div><div class='long'><p>Returns all records that are present in the DataView but not the new store</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a><div class='sub-desc'><p>The updated store instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of records that used to be present</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.DataViewTransition'>Ext.ux.DataViewTransition</span><br/><a href='source/DataViewTransition.html#Ext-ux-DataViewTransition-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.DataViewTransition-method-init' class='name expandable'>init</a>( <span class='pre'>dataview</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes the transition plugin. ...</div><div class='long'><p>Initializes the transition plugin. Overrides the dataview's default refresh function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataview</span> : <a href=\"#!/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a><div class='sub-desc'><p>The dataview</p>\n</div></li></ul></div></div></div></div></div></div></div>","id":"class-Ext.ux.DataViewTransition","aliases":{},"meta":{},"files":[{"href":"DataViewTransition.html#Ext-ux-DataViewTransition","filename":"DataViewTransition.js"}]});