'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState, useEffect, useState } from 'react'
import { calculateHouzinzei } from '../_actions/calculate-houzinzei'

export const FormHouzinzei = () => {
  const [calculatedValue, setCalculatedValue] = useState<number>(0)

  const [actionState, formAction, isPending] = useActionState(
    calculateHouzinzei,
    null,
  )

  const { value } = actionState ?? {}

  useEffect(() => {
    if (value) {
      setCalculatedValue(value)
    }
  }, [value])

  return (
    <form action={formAction} className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-1.5">
        <Label htmlFor="uketoriRisoku">受取利息</Label>
        <Input
          type="number"
          name="uketoriRisoku"
          id="uketoriRisoku"
          className="w-[200px]"
          defaultValue={actionState?.prevData?.uketoriRisoku}
        />
      </div>
      <p className="text-muted-foreground">
        法人税：
        {calculatedValue.toLocaleString()}
        <span className="text-sm ml-1">円</span>
      </p>
      <Button disabled={isPending} type="submit" className="w-fit">
        {isPending ? '計算中...' : '計算する'}
      </Button>
    </form>
  )
}
