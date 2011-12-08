/*
---
description: Two useful methods for stings to encode and decode html/xml elements

authors:
  - Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name)

license:
  - MIT-style license

requires:
 - core/1.3:   '*'

provides:
  - encodeXML
  - decodeXML
...
*/

String.implement({
    encodeXML: function(){  
        var xml_to_escaped = {
            '&': '&amp;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return String(this).replace(/([\&"<>])/g, function(str, item) {
            return xml_to_escaped[item];
        });
    },
    decodeXML: function(){
        var escaped_to_xml = {
            '&amp;': '&',
            '&quot;': '"',
            '&lt;': '<',
            '&gt;': '>'
        };        
        return String(this).replace(/(&quot;|&lt;|&gt;|&amp;)/g, function(str, item) {
            return escaped_to_xml[item];
        });
    }
});
