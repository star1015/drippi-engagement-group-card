import React from 'react'
import cls from 'classnames'
import { Primitive } from '@radix-ui/react-primitive'
import type * as Radix from '@radix-ui/react-primitive'

// CARD ELEMENT
const CARD_NAME = 'Card'
type CardElement = React.ElementRef<typeof Primitive.div>
type PrimitiveCardProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>
interface CardProps extends PrimitiveCardProps {
  children?: React.ReactNode
  rounded?: 'sm' | 'md' | 'lg' | 'none' | 'default' | boolean
  shadow?: boolean
}

const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
  const { children, rounded, shadow, className, ...restProps } = props

  return (
    <Primitive.div
      {...restProps}
      className={cls(
        'flex flex-col items-stretch justify-start overflow-hidden bg-dark-base-300',
        (rounded === 'default' || rounded === undefined || rounded === true) &&
          'rounded',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        (shadow === undefined || shadow === true) && 'shadow-lg',
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </Primitive.div>
  )
})
Card.displayName = CARD_NAME

// CARD CONTENT
const CARD_CONTENT_NAME = 'CardContent'
type CardContentElement = React.ElementRef<typeof Primitive.div>
type PrimitiveCardContentProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>
interface CardContentProps extends PrimitiveCardContentProps {
  children?: React.ReactNode
}

const CardContent = React.forwardRef<CardContentElement, CardContentProps>(
  (props, forwardedRef) => {
    const { children, className, ...restProps } = props

    return (
      <Primitive.div
        {...restProps}
        className={cls('m-4 flex-1', className)}
        ref={forwardedRef}
      >
        {children}
      </Primitive.div>
    )
  },
)
CardContent.displayName = CARD_CONTENT_NAME

// CARD ACTION 
const CARD_ACTIONS_NAME = 'CardActions'
type CardActionsElement = React.ElementRef<typeof Primitive.div>
type PrimitiveCardActionsProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>
interface CardActionsProps extends PrimitiveCardActionsProps {
  children?: React.ReactNode
  align?: 'end' | 'start'
}

const CardActions = React.forwardRef<CardActionsElement, CardActionsProps>(
  (props, forwardedRef) => {
    const { children, align, className, ...restProps } = props

    return (
      <Primitive.div
        {...restProps}
        className={cls(
          'm-4 flex flex-row items-end',
          align === 'start' && 'justify-start',
          (align === 'end' || align === undefined) && 'justify-end',
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </Primitive.div>
    )
  },
)
CardActions.displayName = CARD_ACTIONS_NAME

export {
  Card,
  CardContent,
  CardActions,
  Card as Root,
  CardContent as Content,
  CardActions as Actions,
}

export type { CardProps, CardContentProps, CardActionsProps }
