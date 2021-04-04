var b64s = "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ALkQBOD+uiAD4P6+gAPg/kgJwccBAQAAAEiJx0gJ10iDwhBIOfLHBwAAAQB167qABOD+vgAF4P5IicdICddIg8IQSDnyxwf/////detICcLHAgAAAQC6EAXg/kgJwscCAAABALogBeD+SAnCxwIAAAEAujAF4P5ICdC6AAAQAMcAAAABALgAAAABxwEAAAAAuRMEAAAPMLkIBADADzD6QQ8gwUyJyEgl////30gNAAAAQA8iwA8JDyDYDyLYMfZBuv8CAABEidFIifBIifIPMEG4BgAAALkAAgAATInADzC7AAgAgL//AAAAuQECAABIidhIifoPMEG7AQAAALkCAgAATInATInaDzC5AwIAALgACAAASIn6DzC5BAIAALoCAAAATInADzC5BQIAAEiJ2EiJ+g8wuQYCAABIifBMidoPMLkHAgAAuAAIAEBIifoPMA8JDyDYDyLYuAAMAABEidFIifIPMEEPIsH7ZYsEJTQAAACFwHQL8P8FVy8AAPr06/xIjT0CKQAA6KcKAAC6BwAAAInQ8A+xFTgvAAB19EiNPQspAADoigoAAA8g4Eglf////w8i4A8g2kiLDZwvAABIuADw/////w8ASCHCu4cAAIBICcpIIwJICchIiVgQSIHDAAAAQEjHAIcAAABIx0AIhwAAQEiJWBgxwMYAAEj/wEg9ABAAAHXySIsdTC8AADHAgM8QxgQDAEj/wEg9ACAAAHXxSIsFMS8AAEiNkwAQAABIjT2XKAAAxOL48sJIg8gHSIkDSIsVEC8AAEjB6ieB4v8BAABIiQTTuIcAAIBIiYMQEAAASAUAAABASImDGBAAAEjHgwAQAACHAAAASMeDCBAAAIcAAEDopgkAAEiLFccuAABmx0QkBv8HSI2DACAAAMTi6PLQSIlUJAhIjZMAKAAAxgAASP/ASDnCdfVIuP//AAAAmi8ASI09GigAAEiJgxAgAABIuP//AAAAkg8ASImDGCAAALiZAAAASMHgKEiJgyAgAADoNwkAAA+3RCQGSI0NPggAAEiLVCQITI1sAgFIixVNHgAAMcBIOcJ0DkCKNAFBiHQFAEj/wOvtTIslJi4AAEiNPcgnAADEQpjy5UwDJR4eAADo5ggAAEyLBbctAAC5AAQAAEiLBZstAABIixX0LQAASY2sJAACAABIie9MicZJgcQAEgAA86XE4mjyyMaFEAIAANCJjRgCAABIiw1sLQAASPfSQYu4OAIAAMeFPAIAAAUAAABIIdCJjRwCAABIwekgiY3EAAAASIsNTi0AAEjB6CBEiaUoAgAASI13/4mFwAAAAEEh1DHAgDwBAA+Vwkg5xkEPl8BI/8BEIcKA4gF150g5x0gPRsYx0kg50HQNQIo0EUGINBRI/8Lr7kHGBAQASI09BycAAOgPCAAAuBgAAPxICwUrLQAAv+AACvhIixBIg+L+SIkQ6FMYAAC/4BAK+OhJGAAAv+AgCvjoPxgAAL/gMAr46DUYAAC/4EAK+OgrGAAAv+BQCvjoIRgAAL/gYAr46BcYAAC/4HAK+OgNGAAASI09tSYAAOidBwAASIsFviwAALkkIIDkugQsgORIjT22JgAASAnBSAnCxwEAAAAAxwIAAAAAxwEAD78PuWgggORICcHHAQAEAADHAgAAAA+6KFSA5EgJ0McAAAwAAOhGBwAAuNiGgORICwViLAAAQbgAXoDkvwRegORBugAAAIC+GF6A5EjHAAAAABW4NIKA5EgLBTksAABIxwAAAABQuEjQgORICwUmLAAASMcAAQAAALhI2IDkSAsFEywAAEjHAAEAAAC4AMOA5EgLBQAsAABIxwAAAAAAuKjBgORICwXtKwAASIsQSIHi///n/0iJELgggIDkSIsN1CsAAEgJwUiLEUiBygUAAwBIiRFICwW9KwAASIsQSIHi+v/8/0iJELhgDoDkSIsNpCsAAEgJwUiLEUiBykABEABIiRG5HF6A5EgLBYgrAABIixBIgeK//u//SIkQujBegORIiwVvKwAATAnASMcAVAEAAEiLBV4rAABICfhMiRBIiwVRKwAASAnwSMcAVAEAAEiLBUArAABICchMiRBIiwUzKwAASAnQSMcAVAEAALg0XoDkTIsNHSsAAEkJwU2JEUG5BDSB5EwLDQorAABJxwEBAAAAQbkMNIHkTAsN9ioAAEnHAQEAAABMCwXoKgAASccAVgEAAEgLPdoqAABIxwfwAFYYSI097iQAAEgLNcUqAABIxwZWAQAASAsNtyoAAEjHAfAAAFBICxWpKgAASMcCVgEAAEgLBZsqAABIxwDwEEUB6GcFAABIiz2IKgAASInuSI1MJAZI99dIIftIIf5IIz0IKgAASInaQf/VSI09siQAAOg2BQAASIPEGFtdQVxBXcNIiT3kKQAASIk19SkAAEiJFd4pAABIiQ3fKQAATIkF6CkAAMMxwMYEBwBI/8BIPQAQAAB18Q+2lgECAAAxwEiDwhGKjAbxAQAAiIwH8QEAAEj/wEg5wnfqD7aX6AEAAL4AAACASInQSGvSFEgB+kjHgtACAAAAAAAASMeC2AIAAACAAADHguACAAABAAAAjVABD7bSSGvSFEgB+kjHgtACAAAAgAAASMeC2AIAAACABwDHguACAAACAAAAjVACD7bSSGvSFEgB+kjHgtACAAAAAAgASMeC2AIAAACgAQDHguACAAABAAAAjVADD7bSSGvSFEgB+kjHgtACAAAAoAkASMeC2AIAAABgAADHguACAAACAAAAjVAED7bSSGvSFEgB+kjHgtACAAAAAAoASMeC2AIAAAAAAgDHguACAAACAAAAjVAFD7bSSGvSFEgB+kjHgtACAAAAAA4ASMeC2AIAAAAAAQDHguACAAADAAAAjVAGD7bSSGvSFEgB+kjHgtACAAAAABAASMeC2AIAAAAAMADHguACAAABAAAAjVAHD7bSSGvSFEgB+kjHgtACAAAAAEAASMeC2AIAAAAACADHguACAAACAAAAjVAID7bSSGvSFEgB+kjHgtACAAAAAEgASMeC2AIAAAAAIADHguACAAABAAAAjVAJD7bSSGvSFEgB+kjHgtACAAAAAGgASMeC2AIAAAAACADHguACAAACAAAAjVAKD7bSSGvSFEgB+kjHgtACAAAAAHAASMeC2AIAAACAjn7HguACAAABAAAAjVALD7bSSGvSFEgB+kjHgtACAAAAgP5+SMeC2AIAAACAAADHguACAAAEAAAAjVAMD7bSSGvSFEgB+kjHgtACAAAAAP9+SMeC2AIAAAAAAQDHguACAAADAAAAjVAND7bSSGvSFEgB+kjHgtACAAAAAAB/SMeC2AIAAAAAAAHHguACAAABAAAAjVAOD7bSSGvSFEgB+kiJstACAABIx4LYAgAAAAAAYMeC4AIAAAIAAACNUA8PttJIa9IUSAH6SIHGAAAAYEiJstACAABIgcYAAAAYSMeC2AIAAAAAABjHguACAAACAAAAjVAQD7bSSGvSFEgB+kiJstACAABIgcYAAAAISMeC2AIAAAAAAATHguACAAACAAAAjVARD7bSSGvSFEgB+kiJstACAABIge4AAABASImy2AIAAL4HAAAAx4LgAgAAAgAAAI1QEg+20kjB5h5Ia9IUg8ATSAH6SImy0AIAAL4AAAC/SImy2AIAAMeC4AIAAAEAAACIh+gBAADDSI094yAAAFAxwP8VeyYAAL8CAAAA/xUgJwAASIs9YSYAAL4AAA4ASIHPAAAOAOgoDQAASI09ziAAADHA/xVJJgAASIs9uiYAADHJSI01t/T//0iJ+v8VoCYAAEiNPbkgAAAxwP8VISYAADHAWsP6DwERuBgAAACO2I7QjsCO4I7oDyLaSYn8SYn1SMfHAAAABkmJ/jHSQYqUJPEBAABI/8JIweIJSY00FEGLjCT0AQAASMHhBEgBz0gBzkiD7whIg+4ISMHpA/3zSKX8SI0lFAIAAEiD5PBqEEmBxgACAABBVkyJ7kjLSIPsEEiLBZElAAC5FOCQyLqQ0AMASAnBizFAgOYgdQT/ynX0ugDgkMhICdBAiDjwSINEJAgASIPCFEgLFVslAAC4kNADAIsKgOFAdQT/yHX1SIPEEMNmQA++x0GJ+GaD+Ap1Cr8NAAAA6JL///9BD7b464xJiflBD745QIT/dApJ/8Hozv///+vtw0iJ+DHJSDnRdA1AijwOQIg8CEj/wevuw0CA/wmNR1d3A41HMMNIifqJ98HvHOjm////SIsKSI15AUiJOon3iAHB7xiD5w/ozf///0iLCkiNeQFIiTqJ94gBwe8Ug+cP6LT///9IiwpIjXkBSIk6ifeIAcHvEIPnD+ib////SIsKSI15AUiJOon3iAHB7wyD5w/ogv///0iLCkiNeQFIiTqIAYnwD7b8g+cP6Gn///9IiwpIjXkBSIk6ifeIAcHvBIPnD+hQ////SIsKg+YPSI15AUiJOon3iAHoOv///0iLCkiNcQFIiTKIAcNBV0FWQVVBVFVTUotvFEG+BAAAAEmJ/UmJ90iNPcUeAACJ6CUA8P//mUH3/kSNYPCJw0SJ5jHA/xXxIwAASWPEujgAAABJjbyFAAEAAEyJ/ujA/v//iehIY8uZQYHMAAAQAEH3/jnIfhlmQYO8jQIBAAAQdQhFiaSNAAEAAEj/wevjWFtdQVxBXUFeQV/DU0mJ+EmJ8onTSYnLRTHJQ4A8CgB0BUn/wev0SYs4QPbHA3QMSI1HAUmJAMYHAOvrugYAAABIjTUxHgAA6Eb+//8x9kmDAAZMicfoXf7//4neTInH6FP+//8x9kyJx+hJ/v//MfZMicfoP/7//74BAAAATInH6DL+//8x9kyJx+go/v//RIneTInH6B3+//8x9kyJx+gT/v//MfZMicfoCf7//zH2TInH6P/9//8x9kyJx+j1/f//QY1xAUyJx+jp/f//MfZMicfo3/3//0mLOEyJykyJ1uis/f//TQMISY1BAUmJAEHGAQBJiwCoA3QMSI1QAUmJEMYAAOvtW8NIiw9IY9ZMiwU9IwAAMcBIOcJ2CcYEAQBI/8Dr8kgBFzHAOcZ+DUWKDABEiAwBSP/A6+9IARfDSIsXMcBIiw3/IgAAxgQCAEj/wEiD+CB180iDByAxwEiJxkj33kiD+A93B0CKdDEP6wVAinQxL0CINAJI/8BIg/ggddtIgwcgw0FVQVRJidRVMcBTSInLQVBIif1JifVIjT3ZHAAA/xX/IQAASYsEJEiNDIUAAAAASDnZdBlIidpMie5IjT3KHAAAMcD/FdkhAAAxwOtlTItFADHAQcYEAABI/8BIPQABAAB18EiLRQBIidpIjbgAAQAASIl9AEmLdCQY6Ir8//+NgwABAABBiQC4AQAACEjB4AVBx0AQEAAAAEmJQAS4AQAAAEGJWBRBx0AYAAEAAEgBXQBaW11BXEFdw1VTQVBIic1Iix/oN////4XAdElIiejHQwwHAAIASMHoAsdDBCwAAACJwiX/AwAAgeIA/P//x0MgFQAAAIlTJEiNcyCJQyhIjZXgAAAAMf/ocgwAAIlDHLgBAAAAWltdw1VTQVBIic1Iix/o1/7//4XAdEtIuAEAAACQAAAAx0MMBwACAEiJQyBIuD0AAABwAgAAx0MENAAAAEiNleAAAABIiUMoSI1zIMdDMAAAAAAx/+gQDAAAiUMcuAEAAABaW13DVVNIg+wYSInNRIlEJAxIix/obv7//4XAdFpEi0QkDMdDDAIAAQDHQwQwAAAAx0MkAAAAAEiNcyBBg/gBGcAx/4PgCYlDIEiJ6EjB6AKJwiX/AwAAgeIA/P//iUMsiVMoSI2V4AAAAOiYCwAAiUMcuAEAAABIg8QYW13DSIsVvCAAAEiF0nQEMcD/4kiLBZwgAADDSIsVnCAAAEiF0nQcMcBR/9JIjRWrEQAAhcB1B0iNFeARAABIidBaw0iNFdQRAABIidDDSIsVaSAAAEiF0nQcMcBR/9JIjRXoGgAAhcB1B0iNFdMaAABIidBaw0iNFccaAABIidDDQVdBVkFVQVRVU0iB7GgCAAAxwEmJ/kiJfCQY6GL///9IhcB1FEiNPakaAAAxwP8VeR8AAOn5BQAASYnFMcDoV////0iNXCQYMcm67UEAAEiNNbEaAABIid9IicXorPv//7kgAAAAuqSBAABIjTWZGgAASInf6JP7//9Iid9MjXwkEei7/P//Mcm67UEAAEiNNYoaAADoc/v//zHJuu1BAABIjTV7GgAASInf6F37//9IiwWeHwAAuu1BAABIjTVtGgAASInfD7ZAfmaD+AFFGeQxyUGD5IBBgcQAAQAA6Cr7//+6pIEAAEljzEiNNVAaAABIid/oE/v//0SJ5kiJ3+gG/P//SIsVMR8AAEiF0nQEMcD/0kyNZCQgTIn/SI0VPBoAAL4HAAAAMcD/FYQeAABMiflIjRUsGgAAvkAAAABMiecxwEyNfCRg/xVlHgAAMcm67UEAAEyJ5kiJ3+ir+v//TIsNTB4AADHATIlMJAjoWP7//0yLTCQITInhSYnASI0V8RkAAEyJ/75AAAAAMcBB/9FMif5IjT3nGQAAMcD/FQceAABIi0UgTIn+uqSBAABIid9IjYgAAQAA6Ez6//9Ii00gSI012BkAAEmLVSBIid9Mi3wkGOho/P//hcAPhE0EAABMif9IjTUuDwAA6Iv5//9Miw26HQAAMcBMjbwkoAAAAEyJTCQI6L79//9Mi0wkCEyJ4UmJwEiNFYcZAAC+QAAAAEyJ/zHAQf/RTIn+SI09TRkAADHA/xVtHQAASItFKLqkgQAATIn+SInfSI2IAAEAAOiy+f//SItNKEiNNU4ZAABJi1UoSInf6NP7//+FwA+EuAMAAEyLDTQdAAAxwEyNvCTgAAAATIlMJAjoOP3//0yLTCQITInhSYnASI0VEBkAAEyJ/75AAAAAMcBB/9FMif5IjT3HGAAAMcD/FeccAABIi0UYTIn+uqSBAABIid9IjYgAAQAA6Cz5//9Ii00YSI011xgAAEmLVRhIid9Mi3wkGOhI+///hcAPhC0DAABMif9IjTXODQAA6Gv4//9Miw2aHAAAMcBMjbwkIAEAAEyJTCQI6J78//9Mi0wkCEyJ4UmJwEiNFYUYAABMif++QAAAADHAQf/RTIn+SI09LRgAADHA/xVNHAAASItFMEyJ/rqkgQAASInfSI2IAAEAAOiS+P//SItNMEiNNU0YAABJi1UwSInfTIt8JBjorvr//4XAD4STAgAATIn/SI019AwAAOjR9///TIsNABwAADHATI28JGABAABMiUwkCOgE/P//TItMJAhMieFJicBIjRX8FwAATIn/vkAAAAAxwEH/0UyJ/kiNPZMXAAAxwP8VsxsAAEiLRThMif66pIEAAEiJ30iNiAABAADo+Pf//0iLTThIjTXFFwAASYtVOEiJ30yLfCQY6BT6//+FwA+E+QEAAEyJ/0iNNVoMAADoN/f//0yLDWYbAAAxwEyNvCSgAQAATIlMJAjoavv//0yLTCQITInhSYnASI0VdRcAAL5AAAAATIn/McBB/9FMif5IjT35FgAAMcD/FRkbAABIi0UAuqSBAABMif5Iid9IjYgAAQAA6F73//9Ii00ASI01PRcAAEmLVQBIid/o3/n//4XAD4RkAQAATIsN4BoAADHATI28JOABAABMiUwkCOjk+v//TItMJAhMieFJicBIjRUAFwAAvkAAAABMif8xwEH/0UyJ/kiNPXMWAAAxwP8VkxoAAEiLRQi6pIEAAEyJ/kiJ30iNiAABAADo2Pb//0iLTQhFMcBJi1UISI01whYAAEiJ3+i4+f//hcAPhNsAAAAxybqkgQAASI01qRYAAEiJ3+ig9v//TIsNQRoAADHATI28JCACAABMiUwkCOhF+v//TItMJAhMieFJicBIjRV/FgAAvkAAAABMif8xwEH/0UyJ/kiNPdQVAAAxwP8V9BkAAEiLRRC6pIEAAEyJ/kiJ30iNiAABAADoOfb//0iLTRBBuAEAAABJi1UQSI01PxYAAEiJ3+gW+f//hcB0PTHJuqSBAABIjTULFgAASInf6AL2//9Ii0QkGEwp8Eg9cIABAHYbSInGunCAAQBIjT0EFgAAMcD/FXsZAABIg8j/SIHEaAIAAFtdQVxBXUFeQV/DSIn4MclIOdF0DUCKPA5AiDwISP/B6+7DxkcJAItPBDHSMcA50XYIAgQXSP/C6/T32IhHCcNBV0FWQVVBVFVTSI2HAIAAAEiD7EhIiUQkCEiJ/UmJ9THAxoQFAIAAAABI/8BIPQCAAAB17UiJ6kyJ7kiNPZQVAAAxwP8V5hgAAEiLfCQIuQkAAABIie7zpUiNhSSAAABIjT2SFQAASIlEJDAxwEUx/0Ux9ou1EIAAAP8VsBgAAEiLtRiAAABIjT15FQAAMcD/FZoYAACLhRCAAABIjb0kgAAATCnoSAHoi1AESInGSIlEJBDoEv///4uFEIAAAEiJ7kwp7kgDtRiAAABEiWwkOEwp6ItEBQRIA0QkMItWBEiJRCQYQY1FJImFEIAAAEiLRCQYSIPAMEiJx0iJRCQg6Mb+//9Ii4UYgAAATCnoi1QFBEiLRCQgSCtEJAhMAehIiYUYgAAASItEJCBIjVwQYEiLRCQQi0AESIPoJEjB6AJIiUQkKItEJCiJRCQ8RDl8JDwPjmgBAABIi0QkEEiNPbIUAABGi2S4JE2J4U0p7EkB7EGLBCSJwQ+21MHpEA+28MHoGA+2yUGJwDHA/xWdFwAAQYsEJD1GQUNQdAw9U1NEVHR36c8AAABBi3QkJEiNPXMUAAAxwP8VchcAAEGLdCQoSI09bRQAADHA/xVeFwAAQYt0JCRIid+6QAAAAEyNc0BMKe5IAe7o3f3//0GLVCQETInmTIn36M39//9IidhIK0QkCEGLVCQEA0QkOEmNdBY4iUNkTInz63VNhfZ0SUGLdihIgcPwAAAASInfTCnuSAHui1YE6I79//9Bi0YoTIn3TCnoi1QFBEiJ2EgrRCQIA0QkOEiNnBN0AQAAQYlGKOh7/f//6w9IjT3UEwAAMcD/FbcWAABBi1QkBEyJ5kiJ3+hC/f//QYt0JARIAd5Iid/oSv3//0grXCQIA1wkOEiLRCQYidlCiZy9SIAAAEqJTPhUSInzSf/H6Y3+//+DfCQoAEG4AAAAAEiJ2EQPSUQkKEgrRCQISItMJBhBjXwFAEljwIm8hUiAAABB/8BIiXzBVDHAxgQDAEj/wEiD+FR180i4SVZSU1QAAADGQwgBSIkDSI17CroGAAAASI01NBMAAOig/P//SI17ELoIAAAASI01JhMAAOiL/P//x0MYJRIWIEiNexy6BAAAAEiNNRMTAADob/z//0i4JRIWIEAwIADHQ1AEpwAASIlDIEi4ECgkAAIAQABIiUMwuAAAAPxIiUM4uAEkAARIweAlSInfSIlDQEi4AqAAMAOhAABIiUNISIPDVOg0/P//SItMJBgx0kKNBIUkAAAAiYUogAAAQo0ExSQAAACJQTQxwMaFIIAAAADGhQiAAAAAAoQVAIAAAEj/wkiD+hR18PfYMdKIhQiAAAAxwAKEFQCAAABI/8JIg/okdfD32EiLfCQwiIUggAAA6Mb7//9Ii3wkIOi8+///SCtcJAhIie9Ii3QkCEiDxEhIidpbXUFcQV1BXkFf6YH7//+DyP+D/wR3EbgBAAAAifmJwtPiidHT4P/Iw0iLNb0UAABICf6KRgKoAXQGg+D+iEYCD7Z+AmbR74PnB+jA////iUYQw4n4TI0FyQYAAPfQMf9IOfp0FQ+2DD5I/8cxwcHoCA+2yUEzBIjr5vfQww8gwEiJwkiB4v///v8PIsLDDyDAgecAAAEASAnHDyLHw1VTSIPN/0FQSIn7SIsFbRQAAGoGMclqAEiJ3kG5AQAAAEmJ6EiLOLoCAQAA/xVdFAAAWUiFwF500kiLPUcUAABIicb/FVYUAABICwX/EwAAWltdw0iF/0iJ8nQTSIsFHBQAAEiJ/kiLOP8lKBQAAMNIhfYPhNEAAABIhf8PhMgAAABBVFVTSIn7SIPsEEiJ8jHASIn1SIn+SI099xAAAP8VshMAAEiF23hDSI09AhEAADHA/xWeEwAASIneSI09JhEAADHA/xWMEwAASI09OREAADHA/xV9EwAASI09XREAADHA/xVuEwAAMcDrYP8VxBMAADHA6OX+//9IjT1yEQAASYnEMcD/FUsTAADHRCQC/yUAADHAZsdEJAYAAEiJXCQIilQEAohUBQBI/8BIg/gOde8PCUyJ5+iz/v///xV8EwAAuAEAAADrAzHAw0iDxBBbXUFcw0FUVVNIY99Ia9swSIn1QYnUSAMdQRMAAP8VQxMAADHA6GT+//8xycYECwBI/8FIg/kwdfNEiSNIicdIiWsIx0MsAQAAAOhQ/v//W11BXP8lFRMAAEFUSIHnAMD//1VTSI2e/z8AAEGJ1EiJ/UiB4wDA//+J0UiJ/kiJ2kiNPbgQAAAxwP8VdxIAAEEPtsxIidpIie5bSIs9lRIAAF1BXP8lrBIAAEiF/1VTUXQHSIk9HRIAAEiLFRYSAABIhdJ0C0iNPZMQAAAxwP/SSIsV/xEAAEiF0g+EIwIAAEiNstA49P/3xv8/AABIiTUCEgAAdBBIjT1xEAAAMcD/0un9AQAAMcBIjT17EAAA/9JIiwXeEQAASIsVtxEAAIuwXFIsAouAYFIsAkjB5idIweAeSAnGuP//AQBIweAvSAnGSIXSSIk1shEAAHQLSI09SRAAADHA/9KcW/oxwOgr/f//SMcFIBIAAAAAAABIicVIiwV+EQAASI2QMMcLAEiNiDDKCwBIiRV5EQAASIkVQhEAAEiNkDDyAgBIiRV0EQAASI2QQPECAEiJDV4RAABIjYiQmDIASIkVYBEAAEiNkOD2AgBIiRVaEQAASI2Q4I4cAkiJDZQRAABIjYigR0QASIkVRhEAAEiNkGhSLAJIiQ2AEQAASI2IYEVEAEiJFTIRAABIjZCAB0MASIkNbBEAAEiNiIAvOwBIiRUeEQAASI2QwHIRAEiJDVgRAABIjYjA404ASIkVChEAAEiNkDDtPQBIiQ1MEQAASI2IMGhPAEiJFfYQAABIjZBw/z0ASIkNOBEAAEiNiNAMbgJIiRXiEAAASI2QYFYSAUiJDSQRAABIjYjgRXYCSIkVzhAAAEiNkHCYMgBIiQ0QEQAASI2IsOwNAEgFgNcsAEiJFbQQAABIiQ39EAAASIkF/hAAAP/SSI097Q4AADHA/xU1EAAASI09FA8AADHAxwXiEAAAAQAAAP8VHBAAAEiNPQAPAAAxwP8VDRAAAEiJ7+ie+///U51aMcBbXcN5AAAAAAAAAAAAAAAA9f7/bwAAAABYNQAAAAAAAAUAAAAAAAAAUDUAAAAAAAAGAAAAAAAAADg1AAAAAAAACgAAAAAAAAABAAAAAAAAAAsAAAAAAAAAGAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAA+///bwAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLcAEAUMQkAQJUMADzEAAAD3CsAAMwNADzMfgAkxAAAQJYBgEB8AAAAiH8AQNQBgEB8AAAAiAAAAAAAAAAAAAAS3ABAFDEJAECVDAAgxAAAA9wvAADMEgAgzH4AJMQAAECWAYBAfAAAAIh/AEDUAYBAfAAAAIgAAAAAAAAAAAAAEtwAQBQxCQBAlRYAIMQAAAPcSQAAzBMAIMx+ACTEAABAlgGAQHwAAACIfwBA1AGAQHwAAACIAAAAAAAAAAAAIAAAAAAAAGgQAAAAAAAAaBAAAAAAAACAIQAAAAAAAIBBAAAAAAAAgEEAAAAAAACAQQAAAAAAAIBBAAAAAAAAABgAAAAAAABoEAAAAAAAAGgQAAAAAAAAgCEAAAAAAACAQQAAAAAAAIBBAAAAAAAAgEEAAAAAAACAQQAAAAAAAAAAAACWMAd3LGEO7rpRCZkZxG0Hj/RqcDWlY+mjlWSeMojbDqS43Hke6dXgiNnSlytMtgm9fLF+By2455Edv5BkELcd8iCwakhxufPeQb6EfdTaGuvk3W1RtdT0x4XTg1aYbBPAqGtkevli/ezJZYpPXAEU2WwGY2M9D/r1DQiNyCBuO14QaUzkQWDVcnFnotHkAzxH1ARL/YUN0mu1CqX6qLU1bJiyQtbJu9tA+bys42zYMnVc30XPDdbcWT3Rq6ww2SY6AN5RgFHXyBZh0L+19LQhI8SzVpmVus8Ppb24nrgCKAiIBV+y2QzGJOkLsYd8by8RTGhYqx1hwT0tZraQQdx2BnHbAbwg0pgqENXviYWxcR+1tgal5L+fM9S46KLJB3g0+QAPjqgJlhiYDuG7DWp/LT1tCJdsZJEBXGPm9FFra2JhbBzYMGWFTgBi8u2VBmx7pQEbwfQIglfED/XG2bBlUOm3Euq4vot8iLn83x3dYkkt2hXzfNOMZUzU+1hhsk3OUbU6dAC8o+Iwu9RBpd9K15XYPW3E0aT79NbTaulpQ/zZbjRGiGet0Lhg2nMtBETlHQMzX0wKqsl8Dd08cQVQqkECJxAQC76GIAzJJbVoV7OFbyAJ1Ga5n+Rhzg753l6YydkpIpjQsLSo18cXPbNZgQ20LjtcvbetbLrAIIO47bazv5oM4rYDmtKxdDlH1eqvd9KdFSbbBIMW3HMSC2PjhDtklD5qbQ2oWmp6C88O5J3/CZMnrgAKsZ4HfUSTD/DSowiHaPIBHv7CBmldV2L3y2dlgHE2bBnnBmtudhvU/uAr04laetoQzErdZ2/fufn5776OQ763F9WOsGDoo9bWfpPRocTC2DhS8t9P8We70WdXvKbdBrU/SzaySNorDdhMGwqv9koDNmB6BEHD72DfVd9nqO+ObjF5vmlGjLNhyxqDZryg0m8lNuJoUpV3DMwDRwu7uRYCIi8mBVW+O7rFKAu9spJatCsEarNcp//XwjHP0LWLntksHa7eW7DCZJsm8mPsnKNqdQqTbQKpBgmcPzYO64VnB3ITVwAFgkq/lRR6uOKuK7F7OBu2DJuO0pINvtXlt+/cfCHf2wvU0tOGQuLU8fiz3Whug9ofzRa+gVsmufbhd7Bvd0e3GOZaCIhwag//yjsGZlwLARH/nmWPaa5i+NP/a2FFz2wWeOIKoO7SDddUgwROwrMDOWEmZ6f3FmDQTUdpSdt3bj5KatGu3FrW2WYL30DwO9g3U668qcWeu95/z7JH6f+1MBzyvb2KwrrKMJOzU6ajtCQFNtC6kwbXzSlX3lS/Z9kjLnpms7hKYcQCG2hdlCtvKje+C7ShjgzDG98FWo3vAi1zeXNfa2V4ZWMgaW52b2tlZAoAc3lzX2tleGVjKCVwLCAlenUsICVwLCAlenUsICIlcyIpCgBGYWlsZWQgdG8gYWxsb2NhdGUgaW1hZ2UKAEZhaWxlZCB0byBjb3B5IGluIGltYWdlCgBGYWlsZWQgdG8gYWxsb2NhdGUgaW5pdHJhbWZzCgBGYWlsZWQgdG8gZXh0cmFjdCBHUFUgZmlybXdhcmUgLSBjb250aW51aW5nIGFueXdheQoARmFpbGVkIHRvIGNvcHkgaW4gaW5pdHJhbWZzCgBGYWlsZWQgdG8gYWxsb2NhdGUgY21kbGluZQoARmFpbGVkIHRvIGNvcHkgaW4gY21kbGluZQoACmtleGVjIHBhcmFtZXRlcnM6CgAgICAgS2VybmVsIGltYWdlIHNpemU6ICAgJXp1IGJ5dGVzCgAgICAgSW5pdHJhbWZzIHNpemU6ICAgICAgJXp1IGJ5dGVzICglenUgZnJvbSB1c2VyKQoAICAgIEtlcm5lbCBjb21tYW5kIGxpbmU6ICVzCgAgICAgS2VybmVsIGltYWdlIGJ1ZmZlcjogJXAKACAgICBJbml0cmFtZnMgYnVmZmVyOiAgICAlcAoARmFpbGVkIHRvIGFsbG9jYXRlIGJwCgBGYWlsZWQgdG8gaW5zdGFsbCBzaHV0ZG93biBob29rCgAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKAGtleGVjIHN1Y2Nlc3NmdWxseSBhcm1lZC4gUGxlYXNlIHNodXQgZG93biB0aGUgc3lzdGVtLgoAKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCgoASW5zdGFsbGluZyBzeXNfa2V4ZWMgdG8gc3lzdGVtIGNhbGwgIyVkCgBrZXhlY19pbml0KCkgc3VjY2Vzc2Z1bAoKAGtleGVjOiBXYWl0aW5nIGZvciBzZWNvbmRhcnkgQ1BVcy4uLgoAa2V4ZWM6IFNlY29uZGFyeSBDUFVzIHF1aWVzY2VkCgBrZXhlYzogU2V0dGluZyB1cCBHRFQuLi4KAGtleGVjOiBSZWxvY2F0aW5nIHN0dWIuLi4KAGtleGVjOiBTZXR0aW5nIHVwIGJvb3QgcGFyYW1zLi4uCgBrZXhlYzogQ2xlYW5pbmcgdXAgaGFyZHdhcmUuLi4KAGtleGVjOiBSZWNvbmZpZ3VyaW5nIFZSQU0uLi4KAGtleGVjOiBSZXNldHRpbmcgR1BVLi4uCgBrZXhlYzogQWJvdXQgdG8gcmVsb2NhdGUgYW5kIGp1bXAgdG8ga2VybmVsCgBrZXhlYzogdW5yZWFjaGFibGUgKD8pCgBob29rX2ljY19xdWVyeV9ub3dhaXQgY2FsbGVkCgBBQ1BJIHRhYmxlcyBmaXhlZAoAaG9va19pY2NfcXVlcnlfbm93YWl0OiB1bnJlYWNoYWJsZSAoPykKAE5PUCBoYW5kbGVyIGF0IDB4JXgKADA3MDcwMQBDb3B5aW5nICVzIGZpcm13YXJlCgBjb3B5X2Zpcm13YXJlOiAlczogZXhwZWN0ZWQgc2l6ZSAlZCwgZ290ICVkCgBsaXZlcnBvb2wAZ2xhZGl1cwBmaXJtd2FyZV9leHRyYWN0OiBDb3VsZCBub3QgbG9jYXRlIGZpcm13YXJlIHRhYmxlAGtleQBrZXkvZWFwX2hkZF9rZXkuYmluAGxpYgBsaWIvZmlybXdhcmUAbGliL2Zpcm13YXJlL2VkaWQAbGliL2Zpcm13YXJlL2VkaWQvbXlfZWRpZC5iaW4AYW1kZ3B1AGxpYi9maXJtd2FyZS8lcy8AJXMlc19wZnAuYmluAGZpcm13YXJlX2V4dHJhY3Q6IEV4dHJhY3QgJXMgCgBQRlAAJXMlc19tZS5iaW4ATUUAJXMlc19jZS5iaW4AQ0UAJXMlc19tZWMuYmluAE1FQwAlcyVzX21lYzIuYmluAE1FQzIAJXMlc19ybGMuYmluAFJMQwAl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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAU2NlU3lzQ29yZVJlYm9vdAAAAAAAAAAvc3lzdGVtL2NvbW1vbi9saWIvbGliU2NlU3lzVXRpbC5zcHJ4AAAAc2NlU3lzVXRpbFNlbmRTeXN0ZW1Ob3RpZmljYXRpb25XaXRoVGV4dAAvdXNlci9zeXN0ZW0vYm9vdC9iekltYWdlAC9tbnQvdXNiMC9iekltYWdlAC9tbnQvdXNiMS9iekltYWdlAABGYWlsZWQgdG8gbG9hZCBmaWxlOiBiekltYWdlLgpQYXRocyBjaGVja2VkOgovdXNlci9zeXN0ZW0vYm9vdC9iekltYWdlCi9tbnQvdXNiMC9iekltYWdlCi9tbnQvdXNiMS9iekltYWdlAAAAAAAAL3VzZXIvc3lzdGVtL2Jvb3QvaW5pdHJhbWZzLmNwaW8uZ3oAL21udC91c2IwL2luaXRyYW1mcy5jcGlvLmd6AC9tbnQvdXNiMS9pbml0cmFtZnMuY3Bpby5negAAAAAARmFpbGVkIHRvIGxvYWQgZmlsZTogaW5pdHJhbWZzLmNwaW8uZ3ouClBhdGhzIGNoZWNrZWQ6Ci91c2VyL3N5c3RlbS9ib290L2luaXRyYW1mcy5jcGlvLmd6Ci9tbnQvdXNiMC9pbml0cmFtZnMuY3Bpby5negovbW50L3VzYjEvaW5pdHJhbWZzLmNwaW8uZ3oAAAAAAABwYW5pYz0wIGNsb2Nrc291cmNlPXRzYyByYWRlb24uZHBtPTAgY29uc29sZT10dHkwIGNvbnNvbGU9dHR5UzAsMTE1MjAwbjggY29uc29sZT11YXJ0ODI1MCxtbWlvMzIsMHhkMDM0MDAwMCB2aWRlbz1IRE1JLUEtMToxOTIweDEwODAtMjRANjAgY29uc29sZWJsYW5rPTAgbmV0LmlmbmFtZXM9MCBkcm0uZGVidWc9MAA";

var Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
	/* will return a  Uint8Array type */
	decodeArrayBuffer: function(input) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		return this.decode(input, ab);
	},

	removePaddingChars: function(input){
		var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
		if(lkey == 64){
			return input.substring(0,input.length - 1);
		}
		return input;
	},

	decode: function (input, arrayBuffer) {
		//get last chars to see if are valid
		input = this.removePaddingChars(input);
		input = this.removePaddingChars(input);

		var bytes = parseInt((input.length / 4) * 3, 10);
		
		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;
		
		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);
		
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		
		for (i=0; i<bytes; i+=3) {	
			//get the 3 octects in 4 ascii chars
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));
	
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
	
			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}
	
		return uarray;	
	}
}

function write_payload(payload_writer)
{
	var ua = Base64Binary.decode(b64s);

	var i;
	for (i = 0; i < ua.length; i++) {
		payload_writer[i] = ua[i];
	}
}
