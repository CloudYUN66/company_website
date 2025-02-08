import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('logo') as File
    
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // 保存文件到 public/images 目录
    const filePath = path.join(process.cwd(), 'public/images/logo.png')
    await writeFile(filePath, buffer)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    )
  }
} 