"use client"
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
    const t = useTranslations()
  return (
    <div>{t("hello")}</div>
  )
}
