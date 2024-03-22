def alarm_clock(day, vacation):
  seven = '7:00'
  ten = '10:00'
  if vacation:
    if 1<=day<=5:
      return ten
    else:
      return 'off'
  else:
    if 1<=day<=5:
      return seven
    else:
      return ten
    
      
