; ModuleID = 'src/main.c'
source_filename = "src/main.c"
target datalayout = "e-m:z-p:24:8-p1:16:8-p2:8:8-p3:16:8-p4:24:8-i16:8-i24:8-i32:8-i48:8-i64:8-i96:8-f32:8-f64:8-a:8-n8:16:24-S8"
target triple = "ez80"

@.str = private unnamed_addr constant [14 x i8] c"Hello, World.\00", align 1

; Function Attrs: minsize nounwind optsize
define dso_local i24 @main() local_unnamed_addr #0 {
  tail call cc102 void @os_ClrLCD() #2
  tail call cc102 void @os_HomeUp() #2
  tail call cc102 void @os_DrawStatusBar() #2
  %1 = tail call i24 @os_PutStrFull(ptr noundef nonnull @.str) #2
  br label %2

2:                                                ; preds = %2, %0
  %3 = tail call i8 @os_GetCSC() #2
  %4 = icmp eq i8 %3, 0
  br i1 %4, label %2, label %5, !llvm.loop !2

5:                                                ; preds = %2
  ret i24 0
}

; Function Attrs: minsize optsize
declare dso_local cc102 void @os_ClrLCD() local_unnamed_addr #1

; Function Attrs: minsize optsize
declare dso_local cc102 void @os_HomeUp() local_unnamed_addr #1

; Function Attrs: minsize optsize
declare dso_local cc102 void @os_DrawStatusBar() local_unnamed_addr #1

; Function Attrs: minsize optsize
declare dso_local i24 @os_PutStrFull(ptr noundef) local_unnamed_addr #1

; Function Attrs: minsize optsize
declare dso_local i8 @os_GetCSC() local_unnamed_addr #1

attributes #0 = { minsize nounwind optsize "frame-pointer"="none" "min-legal-vector-width"="0" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="ez80" }
attributes #1 = { minsize optsize "frame-pointer"="none" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="ez80" }
attributes #2 = { minsize nounwind optsize }

!llvm.module.flags = !{!0}
!llvm.ident = !{!1}

!0 = !{i32 1, !"wchar_size", i32 2}
!1 = !{!"clang version 15.0.0 (https://github.com/jacobly0/llvm-project 5f8512f22751066573aa48ac848a6d2195838ac3)"}
!2 = distinct !{!2, !3}
!3 = !{!"llvm.loop.mustprogress"}
