import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_hospitalizacionSegura_novedadesindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/novedades/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':("/"),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("main")],-1)
printHtmlPart(1)
createTagBody(2, {->
createClosureForHtmlPart(2, 3)
invokeTag('captureTitle','sitemesh',6,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',6,[:],2)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',12,[:],1)
printHtmlPart(4)
createTagBody(1, {->
printHtmlPart(5)
invokeTag('message','g',15,['code':("default.link.skip.label"),'default':("Skip to content&hellip;")],-1)
printHtmlPart(6)
invokeTag('sortableColumn','g',29,['property':("descripcion"),'title':(message(code: 'gestion.descripcion.label', default: 'Nombre'))],-1)
printHtmlPart(7)
invokeTag('sortableColumn','g',31,['property':("descripcion"),'title':(message(code: 'gestion.descripcion.label', default: 'Identificación'))],-1)
printHtmlPart(7)
invokeTag('sortableColumn','g',33,['property':("descripcion"),'title':(message(code: 'gestion.descripcion.label', default: 'Base'))],-1)
printHtmlPart(7)
invokeTag('sortableColumn','g',35,['property':("descripcion"),'title':(message(code: 'gestion.descripcion.label', default: 'Subestado'))],-1)
printHtmlPart(7)
invokeTag('sortableColumn','g',37,['property':("descripcion"),'title':(message(code: 'gestion.descripcion.label', default: 'Fecha Rellamada'))],-1)
printHtmlPart(8)
loop:{
int i = 0
for( cliente in (clientesGestionar) ) {
printHtmlPart(9)
expressionOut.print((i % 2) == 0 ? 'even' : 'odd')
printHtmlPart(10)
createTagBody(3, {->
expressionOut.print(fieldValue(bean: cliente, field: "nombreCompletoTitular"))
})
invokeTag('link','g',45,['action':("gestionCliente"),'class':("linkcliente"),'id':(cliente.id)],3)
printHtmlPart(11)
createTagBody(3, {->
expressionOut.print(fieldValue(bean: cliente, field: "idTitular"))
})
invokeTag('link','g',47,['action':("gestionCliente"),'class':("linkcliente"),'id':(cliente.id)],3)
printHtmlPart(11)
expressionOut.print(fieldValue(bean: cliente, field: "nombreBase"))
printHtmlPart(11)
expressionOut.print(fieldValue(bean: cliente, field: "subestadoGestion.nombre"))
printHtmlPart(11)
expressionOut.print(fieldValue(bean: cliente, field: "fechaRellamada"))
printHtmlPart(12)
i++
}
}
printHtmlPart(13)
})
invokeTag('captureBody','sitemesh',67,[:],1)
printHtmlPart(14)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1514480878000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
