def sleep_in(weekday, vacation):
    return not weekday or vacation


sleep_in(False, False)  
sleep_in(True, False)   
sleep_in(False, True)   