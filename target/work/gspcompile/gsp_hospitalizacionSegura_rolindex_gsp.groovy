import com.pw.security.Rol
import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_hospitalizacionSegura_rolindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/rol/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(2)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("layout"),'content':("main")],-1)
printHtmlPart(2)
invokeTag('set','g',7,['var':("entityName"),'value':(message(code: 'rol.label', default: 'Rol'))],-1)
printHtmlPart(2)
createTagBody(2, {->
createTagBody(3, {->
invokeTag('message','g',8,['code':("default.list.label"),'args':([entityName])],-1)
})
invokeTag('captureTitle','sitemesh',8,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',8,[:],2)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',9,[:],1)
printHtmlPart(3)
createTagBody(1, {->
printHtmlPart(4)
invokeTag('message','g',11,['code':("default.link.skip.label"),'default':("Skip to content&hellip;")],-1)
printHtmlPart(5)
createTagBody(2, {->
invokeTag('message','g',14,['code':("default.new.label"),'args':([entityName])],-1)
})
invokeTag('link','g',14,['class':("create"),'action':("create")],2)
printHtmlPart(6)
if(true && (flash.message)) {
printHtmlPart(7)
expressionOut.print(flash.message)
printHtmlPart(8)
}
printHtmlPart(9)
invokeTag('sortableColumn','g',34,['property':("nombre"),'title':(message(code: 'rol.nombre.label', default: 'Nombre'))],-1)
printHtmlPart(10)
invokeTag('sortableColumn','g',36,['property':("dateCreated"),'title':(message(code: 'rol.dateCreated.label', default: 'Date Created'))],-1)
printHtmlPart(10)
invokeTag('sortableColumn','g',38,['property':("lastUpdated"),'title':(message(code: 'rol.lastUpdated.label', default: 'Last Updated'))],-1)
printHtmlPart(11)
invokeTag('sortableColumn','g',40,['property':("Acciones"),'title':(message(code: 'rol.lastUpdated.label', default: 'Acciones'))],-1)
printHtmlPart(12)
loop:{
int i = 0
for( rolInstance in (rolInstanceList) ) {
printHtmlPart(13)
expressionOut.print((i % 2) == 0 ? 'even' : 'odd')
printHtmlPart(14)
createTagBody(3, {->
expressionOut.print(fieldValue(bean: rolInstance, field: "nombre"))
})
invokeTag('link','g',48,['action':("show"),'id':(rolInstance.id)],3)
printHtmlPart(15)
invokeTag('formatDate','g',48,['date':(rolInstance.dateCreated)],-1)
printHtmlPart(15)
invokeTag('formatDate','g',50,['date':(rolInstance.lastUpdated)],-1)
printHtmlPart(16)
createClosureForHtmlPart(17, 3)
invokeTag('link','g',54,['action':("edit"),'class':("fa fa-pencil"),'id':(rolInstance.id)],3)
printHtmlPart(18)
i++
}
}
printHtmlPart(19)
})
invokeTag('captureBody','sitemesh',65,[:],1)
printHtmlPart(20)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1493844622000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
