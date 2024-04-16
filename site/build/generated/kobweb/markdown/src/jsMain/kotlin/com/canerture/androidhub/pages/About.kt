package com.canerture.androidhub.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.core.*
import com.varabyte.kobwebx.markdown.*

@Page
@Composable
fun AboutPage() {
    com.canerture.androidhub.components.layouts.MarkdownLayout("About") {
        org.jetbrains.compose.web.dom.H1(attrs = { id("about-this-template") }) {
            org.jetbrains.compose.web.dom.Text("About this template")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.")
        }
        com.varabyte.kobweb.silk.components.layout.HorizontalDivider()
        org.jetbrains.compose.web.dom.H2(attrs = { id("learn") }) {
            org.jetbrains.compose.web.dom.Text("Learn")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.")
        }
        org.jetbrains.compose.web.dom.H3(attrs = { id("files") }) {
            org.jetbrains.compose.web.dom.Text("Files")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("appentry-kt") }) {
            org.jetbrains.compose.web.dom.Text("AppEntry.kt")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("@App")
            }
            org.jetbrains.compose.web.dom.Text(".")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("appstyles-kt") }) {
            org.jetbrains.compose.web.dom.Text("AppStyles.kt")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("sitetheme-kt") }) {
            org.jetbrains.compose.web.dom.Text("SiteTheme.kt")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("An example of how to define some site-specific colors, effectively extending the palette provided by Silk.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("components") }) {
            org.jetbrains.compose.web.dom.Text("components/")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:")
        }
        org.jetbrains.compose.web.dom.Ul {
            org.jetbrains.compose.web.dom.Li {
                org.jetbrains.compose.web.dom.Code {
                    org.jetbrains.compose.web.dom.Text("layout/")
                }
                com.varabyte.kobweb.compose.dom.GenericTag("br", null)
                org.jetbrains.compose.web.dom.Text(" Represents top-level organization for pages")
            }
            org.jetbrains.compose.web.dom.Li {
                org.jetbrains.compose.web.dom.Code {
                    org.jetbrains.compose.web.dom.Text("sections/")
                }
                com.varabyte.kobweb.compose.dom.GenericTag("br", null)
                org.jetbrains.compose.web.dom.Text(" Areas of content that appear across multiple pages (such as nav bars and footers)")
            }
            org.jetbrains.compose.web.dom.Li {
                org.jetbrains.compose.web.dom.Code {
                    org.jetbrains.compose.web.dom.Text("widgets/")
                }
                com.varabyte.kobweb.compose.dom.GenericTag("br", null)
                org.jetbrains.compose.web.dom.Text(" Home for low-level UI pieces that you can use around your site")
            }
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("pages") }) {
            org.jetbrains.compose.web.dom.Text("pages/")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("Any ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("@Composable")
            }
            org.jetbrains.compose.web.dom.Text(" under this folder additionally tagged with ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("@Page")
            }
            org.jetbrains.compose.web.dom.Text(" will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("resources/markdown")
            }
            org.jetbrains.compose.web.dom.Text(" folder.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("resources") }) {
            org.jetbrains.compose.web.dom.Text("resources/")
        }
        org.jetbrains.compose.web.dom.Ul {
            org.jetbrains.compose.web.dom.Li {
                org.jetbrains.compose.web.dom.Code {
                    org.jetbrains.compose.web.dom.Text("public")
                }
                com.varabyte.kobweb.compose.dom.GenericTag("br", null)
                org.jetbrains.compose.web.dom.Text(" If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.")
            }
            org.jetbrains.compose.web.dom.Li {
                org.jetbrains.compose.web.dom.Code {
                    org.jetbrains.compose.web.dom.Text("markdown")
                }
                com.varabyte.kobweb.compose.dom.GenericTag("br", null)
                org.jetbrains.compose.web.dom.Text(" Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.")
            }
        }
        org.jetbrains.compose.web.dom.H3(attrs = { id("classes") }) {
            org.jetbrains.compose.web.dom.Text("Classes")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("modifier") }) {
            org.jetbrains.compose.web.dom.Text("Modifier")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("Kobweb introduces the ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("Modifier")
            }
            org.jetbrains.compose.web.dom.Text(" keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("componentstyle") }) {
            org.jetbrains.compose.web.dom.Text("ComponentStyle")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text("ComponentStyle")
            }
            org.jetbrains.compose.web.dom.Text(" class in a Kotlin-idiomatic way. You can find examples of component styles used throughout the template.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("componentvariant") }) {
            org.jetbrains.compose.web.dom.Text("ComponentVariant")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("You can generate variants from component styles, which are ways to take base component styles and tweak them further.")
        }
        org.jetbrains.compose.web.dom.H4(attrs = { id("keyframes") }) {
            org.jetbrains.compose.web.dom.Text("Keyframes")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("You can create animations by declaring keyframes for them.")
        }
        org.jetbrains.compose.web.dom.H2(attrs = { id("starting-point") }) {
            org.jetbrains.compose.web.dom.Text("Starting Point")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ")
            org.jetbrains.compose.web.dom.Em {
                org.jetbrains.compose.web.dom.Text("About")
            }
            org.jetbrains.compose.web.dom.Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("If instead you'd like to start from scratch, you can run")
        }
        org.jetbrains.compose.web.dom.Pre { org.jetbrains.compose.web.dom.Code { org.jetbrains.compose.web.dom.Text("""${'$'} kobweb create app/empty
""") } }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("which will create a new project with nothing inside of it except for a minimal, skeletal structure.")
        }
        org.jetbrains.compose.web.dom.H2(attrs = { id("export-and-deploy") }) {
            org.jetbrains.compose.web.dom.Text("Export and Deploy")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("There are two flavors of Kobweb sites: ")
            org.jetbrains.compose.web.dom.Em {
                org.jetbrains.compose.web.dom.Text("static layout")
            }
            org.jetbrains.compose.web.dom.Text(" and ")
            org.jetbrains.compose.web.dom.Em {
                org.jetbrains.compose.web.dom.Text("full stack")
            }
            org.jetbrains.compose.web.dom.Text(". You can ")
            com.varabyte.kobweb.silk.components.navigation.Link("https://github.com/varabyte/kobweb#static-layout-vs-full-stack-sites") {
                org.jetbrains.compose.web.dom.Text("read more about these choices here")
            }
            org.jetbrains.compose.web.dom.Text(".")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("For most sites, a static layout site is what you want, so to do that, return to the command line and run:")
        }
        org.jetbrains.compose.web.dom.Pre { org.jetbrains.compose.web.dom.Code { org.jetbrains.compose.web.dom.Text("""${'$'} kobweb export --layout static
""") } }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("After that runs for a little while, your production site should be generated! You can find the files under the ")
            org.jetbrains.compose.web.dom.Code {
                org.jetbrains.compose.web.dom.Text(".kobweb/site")
            }
            org.jetbrains.compose.web.dom.Text(" folder.")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("Test it locally by running:")
        }
        org.jetbrains.compose.web.dom.Pre { org.jetbrains.compose.web.dom.Code { org.jetbrains.compose.web.dom.Text("""${'$'} kobweb run --layout static --env prod
""") } }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.")
        }
        org.jetbrains.compose.web.dom.P {
            org.jetbrains.compose.web.dom.Text("You can ")
            com.varabyte.kobweb.silk.components.navigation.Link("https://bitspittle.dev/blog/2022/staticdeploy") {
                org.jetbrains.compose.web.dom.Text("read this blog post")
            }
            org.jetbrains.compose.web.dom.Text(" for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.")
        }
    }
}
