	section	.text,"ax",@progbits
	assume	adl = 1
	section	.text,"ax",@progbits
	public	_main
_main:
	ld	iy, -3145600
	call	_os_ClrLCD
	call	_os_HomeUp
	call	_os_DrawStatusBar
	ld	hl, _.str
	push	hl
	call	_os_PutStrFull
	pop	hl
BB0_1:
	call	_os_GetCSC
	or	a, a
	jr	z, BB0_1
	or	a, a
	sbc	hl, hl
	ret
	section	.text,"ax",@progbits

	section	.rodata,"a",@progbits
	private	_.str
_.str:
	db	"Hello, World.", 0

	ident	"clang version 15.0.0 (https://github.com/jacobly0/llvm-project 5f8512f22751066573aa48ac848a6d2195838ac3)"
	extern	__Unwind_SjLj_Register
	extern	__Unwind_SjLj_Unregister
	extern	_os_PutStrFull
	extern	_os_GetCSC
	extern	_os_ClrLCD
	extern	_os_DrawStatusBar
	extern	_os_HomeUp
