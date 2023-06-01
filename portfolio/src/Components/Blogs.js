import React from 'react'
import JavaScriptBlog from './Blogs/JavaScriptBlog'
import ReactBlog from './Blogs/ReactBlog'
import RubyBlog from './Blogs/RubyBlog'


export default function Blogs() {
  return (
    <div className='blog'>
        <JavaScriptBlog />
        <ReactBlog />
        <RubyBlog />
    </div>
  )
}
