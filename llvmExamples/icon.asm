	section .icon

	jp	___prgm_init
	db	$01
	public ___icon
___icon:
	db	$10, $10
	db	$FF, $FF, $FF, $FF, $FE, $B5, $B5, $B6, $B6, $B5, $B5, $FE, $FF, $FF, $FF, $FF
	db	$FF, $FF, $FF, $B5, $FE, $DF, $96, $76, $76, $96, $DF, $FE, $B5, $FF, $FF, $FF
	db	$FF, $FF, $B5, $DF, $56, $0E, $0D, $0D, $0D, $0D, $0E, $4E, $DF, $B5, $FF, $FF
	db	$FF, $B5, $DF, $2E, $0D, $0D, $0D, $0D, $0D, $0D, $0D, $0D, $2E, $DF, $B5, $FF
	db	$FE, $FE, $56, $0D, $0D, $05, $05, $05, $05, $05, $05, $0D, $0D, $4E, $FE, $FE
	db	$B5, $DF, $0D, $05, $4D, $B6, $DF, $96, $4D, $D6, $D6, $B6, $05, $0D, $D6, $B5
	db	$B5, $96, $05, $2D, $FF, $DF, $76, $96, $4D, $FF, $96, $6E, $05, $05, $76, $B5
	db	$B6, $4E, $05, $76, $FF, $0D, $05, $05, $4D, $FF, $B6, $76, $05, $05, $4D, $B6
	db	$B6, $4E, $05, $76, $FF, $05, $24, $24, $4D, $FF, $B6, $76, $05, $05, $4D, $B6
	db	$B5, $76, $05, $2D, $FF, $D6, $75, $76, $4D, $FF, $76, $4D, $05, $05, $6D, $B5
	db	$B5, $BF, $05, $05, $4D, $DE, $FF, $96, $2D, $DF, $DF, $B7, $05, $05, $B6, $B5
	db	$FE, $FE, $6D, $05, $24, $04, $04, $04, $04, $04, $24, $05, $05, $2D, $DE, $FE
	db	$FF, $B5, $DF, $2D, $24, $04, $04, $04, $04, $04, $24, $05, $0D, $D6, $B5, $FF
	db	$FF, $FF, $B5, $DF, $4D, $24, $04, $04, $04, $24, $24, $2D, $B6, $B5, $FF, $FF
	db	$FF, $FF, $FF, $B5, $FE, $B6, $6D, $2D, $2D, $4D, $96, $DE, $B5, $FF, $FF, $FF
	db	$FF, $FF, $FF, $FF, $FE, $B5, $B5, $B6, $B6, $B5, $B5, $FE, $FF, $FF, $FF, $FF
	public ___description
___description:
	db	"CE C Toolchain Demo", 0
___prgm_init:
